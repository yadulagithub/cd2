console.log("USers.js is running");
const mongoose = require("mongoose");
const User = mongoose.model("User");

class UserController {

    getAll(req, res) {
        User.find({})
            .then(Users => res.json(Users))
            .catch(err => res.json(err));
    }

    create(req, res){
        // only doing this because we have a checkbox...
        // seriously you don't need to do this if you don't
        // req.body.hasRings = req.body.hasRings !== undefined;
        let User = new User(req.body);
        User.save()
            .then(() => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
    }

    getOne(req, res) {
        let _id = req.params._id;
        User.findOne({_id})
            .then(User => res.json(User))
            .catch(err => res.json(err));
    }

    update(req, res) {
        let _id = req.params._id;
        // req.body.hasRings = req.body.hasRings !== undefined;
        User.findByIdAndUpdate({_id}, req.body, {runValidators: true})
            .then( () => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
    }

    delete(req, res) {
        let _id = req.params._id;
        User.findByIdAndDelete({_id})
            .then( () => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
    }

}

module.exports = new UserController();