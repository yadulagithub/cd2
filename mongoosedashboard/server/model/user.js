console.log("server.js is running");

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "Name has to be minimum 2 characters"]
    },
    messages: [MessageSchema]
    
}, {timestamps: true});

mongoose.model("User", UserSchema);