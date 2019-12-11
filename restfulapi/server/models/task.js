console.log("TASK.js is running");

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {  type: String, required: true, minlength: [2, "Name has to be minimum 2 characters"]  },
    description: {  type: String, required: true, minlength: [2, "Name has to be minimum 2 characters"]  },
    completed: { type: Boolean, default: false }
}, {timestamps: true});

mongoose.model("Task", TaskSchema);