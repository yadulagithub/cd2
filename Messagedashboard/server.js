onsole.log("server.js is running");

const express = require("express"),
         cors = require("cors"),
         port = 8000,
      DB_NAME = "planets",
          app = express();

app.use(express.static(__dirname +"/static"));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/client/dist/client"));
app.use(express.json());
app.use(cors());

require("./server/utils/mongoose")(DB_NAME);
require("./server/utils/routes")(app);

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});


