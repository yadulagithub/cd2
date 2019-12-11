console.log("server.js is running");

const express = require("express"),
         cors = require("cors"),
         port = 8000,
      DB_NAME = "Tasks_db",
          app = express();

// Using api and testing in postman so use json
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/RestfulTasks/dist/RestfulTasks"));
app.use(express.json());
app.use(cors());

require("./server/utils/mongoose")(DB_NAME);
require("./server/utils/routes")(app);

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});


