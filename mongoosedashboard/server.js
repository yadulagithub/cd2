const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
mongo = require('mongodb')

port = 8000;
app = express();

app.use(express.static(__dirname +"/static"));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


//connect / create dashboard_db
mongoose.connect('mongodb://localhost/mongoose_DB', {useNewUrlParser: true})
    .then( () => console.log("everything is working"))
    .catch(err => console.log(err));

const MongooseSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 25},
  detail: { type: String, required: true, maxlength: 100}
 });
 // create an object that contains methods for mongoose to interface with MongoDB
const Mongoose = mongoose.model('Mongoose', MongooseSchema);


// GET '/' Displays all of the mongooses.
app.get('/', (req, res) => {
  Mongoose.find()
    .then(data => res.render("index", {mongooses: data}))
      .catch(err => res.json(err));
  console.log(" Here we are ");

});

//GET '/mongooses/new' Displays a form for making a new mongoose.
app.get('/mongooses/:id', (req, res) => {
  console.log(" id is :" + req.params.id);
  Mongoose.findOne({_id: req.params.id})
     .then(Mongoose => res.render("/display", {Mongoose}))
    .catch(err => res.json(err));
});

// GET '/mongooses/new' Displays a form for making a new mongoose.
app.get('/mongooses/new', (req, res) => {
  console.log(" Here we are in /MONGOOSES/NEW");
  res.render('new');

});

app.get('/new', (req, res) => {
  console.log(" Here we are in /new ");
  res.render('new');

});

//POST-save  '/mongooses' Should be the action attribute for the form in the above route (GET '/mongooses/new').
app.post('/savemongoose', (req, res) => {
  console.log("we are saving new mongoose", req.body);
  const mong = new Mongoose();
  mong.name = req.body.name;
  mong.detail = req.body.detail;
  mong.save()
    .then(newUserData => console.log('user created: ', newUserData))    
    .catch(err => res.json(err));
    res.redirect('/');
});


// GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.

app.post('/newmongoose', (req, res) => {
  console.log("we are in new mongoose", req.body);
  const mong = new Mongoose();
  mong.name = req.body.name;
  mong.detail = req.body.detail;
  mong.save()
    .then(newUserData => console.log('user created: ', newUserData))    
    .catch(err => res.json(err));
    res.redirect('/');
});

app.post('/mongooses', (req, res) => {
  console.log("we are in mongooses", req.body);
  res.redirect('/newmongoose');
});

// GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.
app.get('/mongoose/edit/:id', (req, res) => {
  console.log(" id is :" + req.params.id);
  Mongoose.findOne({_id: req.params.id})
     .then(mongoose => res.render("edit", {mongoose}))
    .catch(err => res.json(err));
});

// POST '/mongoose/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').

app.post('/mongooses/:id', (req, res) => {
  console.log("we are in update mongoose", req.body);
  var _id = req.params.id;
  console.log(" id is :" + req.params.id);
  Mongoose.findByIdAndUpdate({_id}, req.body, {runValidators: true})
     .then( () => res.redirect('/'))
     .catch(err => res.json(err));
     
});


//POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.

app.get('/mongoose/destroy/:id', (req, res) => {
  var _id = req.params.id;
  console.log(" Destroy id is :" + req.params.id);
  Mongoose.findByIdAndDelete({_id}, req.body)
  .then( () => res.redirect('/'))
  .catch(err => res.json(err));
  // //Mongoose.findOne({_id: req.params.id})
  //    .then(mongoose => res.render("delete", {mongoose}))
  //   .catch(err => res.json(err));

  
});

// app.post('/mongoose/destroy/:id', (req, res) => {
//   console.log("we are in delete mongoose", req.body);
//   console.log(" id is :" + req.params.id);
//   Mongoose.findByIdAndUpdate({_id}, req.body)
//   .then( () => res.redirect('/'))
//   .catch(err => res.json(err));
  
// });












app.listen(port, () => {
    console.log("listening to port" + port);
});
