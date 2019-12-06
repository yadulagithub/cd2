console.log("routes.js is running");
const Users = require("../controllers/users");
const Users = require("../controllers/comments");
const Users = require("../controllers/messages");

module.exports = function(app) {
    app.get("/planets", Planets.getAll);
    app.post("/planets", Planets.create);
    app.get("/planets/:_id", Planets.getOne);
    app.put("/planets/:_id", Planets.update);
    app.delete("/planets/:_id", Planets.delete);
}