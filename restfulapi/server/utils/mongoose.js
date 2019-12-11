console.log("mongoose.js is running");
const mongoose = require("mongoose");

module.exports = function(DB_NAME) {
    //connect / create dashboard_db
    mongoose.connect(`mongodb://localhost/${DB_NAME}`);
    require("../models/task");
    
}