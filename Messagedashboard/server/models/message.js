console.log("message.js is running- Message model");

const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
   messagedetail: {type: String, required: [true, "Messages must have content"]},
   comments: [CommentSchema]
}, {timestamps: true})

mongoose.model("Message", MessageSchema);

