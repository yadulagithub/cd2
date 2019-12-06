const express = require("express");
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

let files = [];
let cats = [];
let cars = [];
let newform = [];

app = express();
port = 8000;
app.use(express.static(__dirname +"/static"));
app.use(express.urlencoded())
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
 })
 // create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

app.get('/', (req, res) => {
  console.log(" Here we are ");
  res.render('users');
});
app.get('/users/:id', (req, res) => {
   console.log(" id is :" + req.params.id);
    User.findOne({_id: req.params.id})
      .then(user => res.render("result", {user}))
      .catch(err => res.json(err));
});

app.post('/users', (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.age = req.body.age;
  user.save()
    .then(newUserData => {
      console.log('user created: ', newUserData);
      res.redirect(`/users/${user._id}`)
    })
    .catch(err => res.json(err));

});







app.listen(port, () => {
    console.log("listening to port" + port);
});
