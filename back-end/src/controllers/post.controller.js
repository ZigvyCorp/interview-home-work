'use strict';

const { CreatedResponse, OkResponse } = require("../helpers/success-response");
const PostService = require("../services/post.service");

class PostController {
    static createNewPost = async (req, res, next) => {
        new CreatedResponse({
            message: "Create post successfully",
            metadata: await PostService.createPost(req.body)
        }).send(res);
    }
    static getAllPosts = async (req, res, next) => {
        new OkResponse({
            message: "Get all posts successfully",
            metadata: await PostService.getAllPosts(req.query)
        }).send(res);
    }
    static getPostById = async (req, res, next) => {
        new OkResponse({
            message: "Get post by id successfully",
            metadata: await PostService.getPostById(req.params.id)
        }).send(res)
    }
    static deletePostById = async (req, res, next) => {
        new OkResponse({
            message: "Delete post successfully",
            metadata: await PostService.deletePost(req.params.id)
        }).send(res);
    }
    static searchPostsByKeyword = async (req, res, next) => {
        new OkResponse({
            message: "Search posts successfully",
            metadata: await PostService.searchPostsByKeyword(req.query.keyword)
        }).send(res)
    }
}

module.exports = PostController