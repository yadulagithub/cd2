console.log("comment.js is running - Comment model");

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  commentdetail: {type: String, required: [true, "Messages must have content"]},
  user_id: {type: String, required: [true, "User id numst be present"]}
  
}, {timestamps: true})

mongoose.model("Comment", CommentSchema);