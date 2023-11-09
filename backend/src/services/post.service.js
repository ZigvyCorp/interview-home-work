const DB = require("sequelize");
const postRepository = require("../repositories/post.repository");
const { NotFoundError } = require("../core/error.response");

async function getAllPost({ search }) {
    const condition = {};
    if (search) {
        condition.title = {
            [DB.Op.like]: `%${search}%`,
        };
    }

    const posts = await postRepository.getAllPost(condition);
    return posts;
}

async function getPostById({ id }) {
    const post = await postRepository.getPostById(id);
    if (!post) throw new NotFoundError("Not found post");

    return post;
}

module.exports = {
    getAllPost,
    getPostById,
};
