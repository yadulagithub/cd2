console.log("server.js is running - Comment model");

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  commentdetail: {type: String, required: [true, "Messages must have content"]},
  
}, {timestamps: true})

mongoose.model("Comment", CommentSchema);