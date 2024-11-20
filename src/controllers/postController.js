const { Post } = require("../models/Post");
const { PostService } = require("../services/postService");
const { Controller } = require('../../system/controllers/Controller');
const { Comment } = require('../models/Comment');
const { CommentService } = require('../services/commentService');
const commentService = new CommentService(new Comment().getInstance());

const postService = new PostService(new Post().getInstance());
class PostController extends Controller{
    constructor(service) {
      super(service);
    }

    async findAllPost(req, res) {
      const users = await postService.findAllPost();
      res.status(200).json(users);
    }

    async findById(req, res) {
      const { id } = req.params;
      const post = await postService.findById(id);
      res.status(200).json(post);
    }


    async findAllCommentByPostId(req, res) {
      const { id } = req.params;
      const comments = await commentService.findAllCommentByPostId(id);
      res.status(200).json(comments);
    }
  
    async createPost(req, res) {
      const { body } = req;
      console.log(body);
      const post = await postService.createPost(body);
      res.status(201).json(post);
    }

    async updateBody(req, res) {
      const { id } = req.params;
      const { body } = req.body;
      const data = {
        body: body,
      }
      const post = await postService.updatePost(id, data);
      res.status(200).json(post);
    }

    async updatePost(req, res) {
      const { id } = req.params;
      const { title, body } = req.body;
      const data = {
        body: body,
        title: title,
      }
      const post = await postService.updatePost(id, data);
      res.status(200).json(post);
    }

    async deletePost(req, res) {
      const { id } = req.params;
      const post = await postService.deletePost(id);
      const deleteComment = await commentService.deleteCommentByPostId(id);
      res.status(200).json(post);
    }
  
}

module.exports = new PostController(postService);