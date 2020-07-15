var models = require('../models');
var Response = require('../utils/response');
const { sequelize } = require('../models');

module.exports = {
    retrieveAll: async function(req, res) {
        await models.Comment.findAll({
            order: [
                ['id', 'DESC']
            ]
        })
        .then(function(comments) {

        
            res.send(Response.successResponse("This is comments list.", comments));
        })
        .catch(function(err) {
            res.send(Response.unknowErrorResponse("Internal Error", err));
        });
    },
    retrieveOne: async function(req, res) {
        var targetID = req.params.id;

        await models.Comment.findOne({
            where: {
                id: targetID
            }
        })
        .then(function(comment) {
            if (comment) {
                res.send(Response.successResponse("This is the comment with ID equal " + targetID, comment));
            } else {
                res.send(Response.notFoundResponse("Not found the target comment", null));
            }
            
        })
        .catch(function(err) {
            res.send(Response.unknowErrorResponse("Internal Error", err));
        });
    },
    create: async function(req, res) {
        await models.Comment.create({
            owner: req.body.owner,
            post: req.body.post,
            content: req.body.content,
            created_at: new Date(),
        }).then(function(result) {
            res.send(Response.successResponse("Adding a comment successfully!", result));
        }).catch(function(err) {
            res.send(Response.unknowErrorResponse("Internal error.", err));
        });
    },
    update: async function(req, res) {
        var targetID = req.params.id;

        await models.Comment.update({
            owner: req.body.owner,
            post: req.body.post,
            content: req.body.content,
            created_at: new Date(),
        }, {
            where: {
                id: targetID
            }
        }).then(async function(result) {

            await models.Comment.findOne({
                where: {
                    id: targetID
                }
            })
            .then(function(comment) {
                res.send(Response.successResponse(`Updating a comment with ID equal ${targetID} successfully!`, comment));
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
        await models.Comment.destroy({
            where: {
                id: targetID
            }
        })
        .then(function(result) {
            if (result === 0) {
                res.send(Response.notFoundResponse(`Cannot find a comment with ID equal ${targetID}.`, null));
            } else {
                res.send(Response.successResponse(`Deleting the comment with ID equal ${targetID} successfully.`, null));
            }
        })
        .catch(function(err) {
            res.send(Response.unknowErrorResponse("Internal error.", err));
        });
    },
    countCommentBelongToPost: async function(req, res) {
        var targetPostID = req.params.postID;

        await sequelize.query('select * from comments where post = :postID', {
            replacements: {
                postID: targetPostID
            },
            type: sequelize.QueryTypes.SELECT
        }).then(function(comments) {
            res.send(Response.successResponse(`This is all comments belong to the post with ID equal ${targetPostID}`, comments))
        }).catch(function(err) {
            res.send(Response.unknowErrorResponse("Internal error.", err));
        });;
    }
}
