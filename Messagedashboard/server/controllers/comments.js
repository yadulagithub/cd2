console.log("Comments.js is running");
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

class CommentController {

    getAll(req, res) {
        Comment.find({})
            .then(Comments => res.json(Comments))
            .catch(err => res.json(err));
    }

    create(req, res){
        // only doing this because we have a checkbox...
        // seriously you don't need to do this if you don't
        // req.body.hasRings = req.body.hasRings !== undefined;
        let Comment = new Comment(req.body);
        Comment.save()
            .then(() => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
    }

    getOne(req, res) {
        let _id = req.params._id;
        Comment.findOne({_id})
            .then(Comment => res.json(Comment))
            .catch(err => res.json(err));
    }

    update(req, res) {
        let _id = req.params._id;
        // req.body.hasRings = req.body.hasRings !== undefined;
        Comment.findByIdAndUpdate({_id}, req.body, {runValidators: true})
            .then( () => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
    }

    delete(req, res) {
        let _id = req.params._id;
        Comment.findByIdAndDelete({_id})
            .then( () => res.json({"msg": "ok"}))
            .catch(err => res.json(err));
    }

}

module.exports = new CommentController();