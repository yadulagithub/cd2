console.log("routes.js is running");
const Tasks = require("../controllers/tasks");


module.exports = function(app) {
    app.get("/tasks", Tasks.getAll);
    app.get("/tasks/:_id", Tasks.getOne);
    app.post("/tasks", Tasks.create);
    app.put("/tasks/:_id", Tasks.update);
    app.delete("/tasks/:_id", Tasks.delete);
}