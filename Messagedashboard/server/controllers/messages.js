console.log("Messages.js is running");
const mongoose = require("mongoose");
const Message = mongoose.model("Message");

class MessageController {

    getAll(req, res) {
        Message.find({})
            .then(Messages => res.json(Messages))
            .catch(err => res.json(err));
    }

    create(req, res){
        // only doing this because we have a checkbox...
        // seriously you don't need to do this if you don't
        // req.body.hasRings = req.body.hasRings !== undefined;
        let Message = new Message(req.body);
        Message.save()
            .then(() => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
    }

    getOne(req, res) {
        let _id = req.params._id;
        Message.findOne({_id})
            .then(Message => res.json(Message))
            .catch(err => res.json(err));
    }

    update(req, res) {
        let _id = req.params._id;
        // req.body.hasRings = req.body.hasRings !== undefined;
        Message.findByIdAndUpdate({_id}, req.body, {runValidators: true})
            .then( () => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
    }

    delete(req, res) {
        let _id = req.params._id;
        Message.findByIdAndDelete({_id})
            .then( () => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
    }

}

module.exports = new MessageController();