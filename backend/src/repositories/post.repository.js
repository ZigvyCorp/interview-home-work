const Post = require("../models/post.model");

async function getAllPost(query) {
    const data = await Post.findAll({
        where: query,
        raw: true,
    });
    return data;
}

async function getPostById(id) {
    const data = await Post.findOne({
        where: {
            id: id,
        },
        raw: true,
    });
    return data;
}

module.exports = { getAllPost, getPostById };
