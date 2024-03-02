'use strict';

const postModel = require("../models/post.model");
const { findPostById, getPosts, searchPostsByKeyword } = require("../models/repositories/post");

class PostService {
    static createPost = async (payload) => {
        const {id} = payload;
        if (await findPostById(id))
            throw new BadRequestError('Post id already exists');
        return await postModel.create(payload);
    }
    static getAllPosts = async (payload) => {
        return await getPosts({...payload, unSelect: ['_id', '__v']});
    }
    static deletePost = async (id) => {
        return await postModel.findOneAndDelete({id: id});
    }
    static getPostById = async (id) => {
        return (await getPosts({filter: {id: id}, unSelect: ['_id', '__v']}))[0];
    }
    static searchPostsByKeyword = async (keyword) => {
        return await searchPostsByKeyword(keyword);
    }
}

module.exports = PostService;