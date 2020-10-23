var models = require('../models');
var Response = require('../utils/response');

module.exports = {
    retrieveAll: async function(req, res) {
        await models.Post.findAll({
            order: [
                ['id', 'DESC']
            ]
        })
        .then(function(posts) {
            posts.forEach(function(post) {
                post.tags = post.tags.split(" ");
            });
        
            res.send(Response.successResponse("This is posts list.", posts));
        })
        .catch(function(err) {
            res.send(Response.unknowErrorResponse("Internal Error", err));
        });
    },
    retrieveOne: async function(req, res) {
        var targetID = req.params.id;

        await models.Post.findOne({
            where: {
                id: targetID
            }
        })
        .then(function(post) {
            post.tags = post.tags.split(" ");

            res.send(Response.successResponse("This is the post with ID equal " + targetID, post));
        })
        .catch(function(err) {
            res.send(Response.unknowErrorResponse("Internal Error", err));
        });
    },
    create: async function(req, res) {
        await models.Post.create({
            owner: req.body.owner,
            title: req.body.title,
            content: req.body.content,
            created_at: new Date(),
            tags: req.body.tags
        }).then(function(result) {
            result.tags = result.tags.split(" ");
            res.send(Response.successResponse("Adding a post successfully!", result));
        }).catch(function(err) {
            res.send(Response.unknowErrorResponse("Internal error.", err));
        });
    },
    update: async function(req, res) {
        var targetID = req.params.id;

        await models.Post.update({
            owner: req.body.owner,
            title: req.body.title,
            content: req.body.content,
            created_at: new Date(),
            tags: req.body.tags
        }, {
            where: {
                id: targetID
            }
        }).then(async function(result) {

            await models.Post.findOne({
                where: {
                    id: targetID
                }
            })
            .then(function(post) {
                res.send(Response.successResponse(`Updating a post with ID equal ${targetID} successfully!`, post));
            })
            .catch(function(err) {
                res.send(Response.unknowErrorResponse("Internal Error", err));
            });

        }).catch(function(err) {
            res.send(Response.unknowErrorResponse("Internal error.", err));
        });
    },
    delete: async function(req, res) {
        var targetID = req.params.id;
        await models.Post.destroy({
            where: {
                id: targetID
            }
        })
        .then(function(result) {
            if (result === 0) {
                res.send(Response.notFoundResponse(`Cannot find a post with ID equal ${targetID}.`, null));
            } else {
                res.send(Response.successResponse(`Deleting the post with ID equal ${targetID} successfully.`, null));
            }
        })
        .catch(function(err) {
            res.send(Response.unknowErrorResponse("Internal error.", err));
        });
    }
}
