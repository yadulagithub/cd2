const express = require("express");
const path = require('path');
const mongoose = require('mongoose');

port = 8000;
app = express();

app.use(express.static(__dirname +"/static"));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

mongoose.connect('mongodb://localhost/comment_DB', {useNewUrlParser: true})
    .then( () => console.log("everything is working"))
    .catch(err => console.log(err));

const UsercommentSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 25},
  comment: { type: String, required: true, maxlength: 100}
 });
 // create an object that contains methods for mongoose to interface with MongoDB
const Usercomment = mongoose.model('Usercomment', UsercommentSchema);

app.get('/', (req, res) => {
  console.log(" Here we are ");
  res.render(`addquote`);

});

app.post('/prcaddquote', (req, res) => {
//   console.log("Name : " + req.body.name);
//   console.log("Comment : " + req.body.comment);
  console.log("we are here", req.body);
  const user = new Usercomment();
  user.name = req.body.name;
  user.comment = req.body.comment;
  user.save()
    .then(newUserData => console.log('user created: ', newUserData))    
    .catch(err => res.json(err));
    res.redirect('/displayquote');
});

// following does not work
// app.get('/addquote/:id', (req, res) => {
//    console.log(" id is :" + req.params.id);
//     Usercomment.findOne({_id: req.params.id})
//       .then(usercomment => res.render("/addquote", {usercomment}))
//       .catch(err => res.json(err));
// });


app.get('/displayquote', (req, res) => {
    // var name = req.name;/
    // console.log("Name is " + req.name)
    //commnets = Usercomment.find({name: req.name}).comment;

    Usercomment.find()
    .then(data => res.render("displayquote", {comments: data}))
      .catch(err => res.json(err));


  });





app.listen(port, () => {
    console.log("listening to port" + port);
});
