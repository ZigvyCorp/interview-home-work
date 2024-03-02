'use strict';

const commentModel = require("../comment.model");

const findCommentById = async (id) => {
    const comment = await commentModel.findOne({id: id}).lean();
    return comment;
};

module.exports = {
    findCommentById,
}