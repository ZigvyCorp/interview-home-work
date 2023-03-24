import { User } from "../models/users.js";
import { Post } from "../models/posts.js";

class PostController {
  //Create post
  //Body:{userId,title,body}
  async create(req, res) {
    try {
      const user = await User.findById(req.body.userId);
      if (user) {
        const newPost = new post(req.body);
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
      } else {
        res.json("User don't exist");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //Update post
  //Params:post_.id
  async update(req, res) {
    try {
      const post = await Post.findById(req.params.id);
      await post.updateOne({ $set: req.body });
      res.status(200).json("The post has been update");
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //Delete
  //Params:post_.id
  async delete(req, res) {
    try {
      const Post = await Post.findById(req.params.id);
      await Post.deleteOne();
      res.status(200).json("The post has been delete");
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //Get post
  async display(req, res) {
    try {
      const post = await Post.find({}).populate("userId").populate("comment");

      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //Get Post by id
  //Params:post_.id
  async displayPrivate(req, res) {
    try {
      const post = await Post.find({ userId: req.params.id }).populate(
        "userId"
      );
      res.status(200).json(...post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //Search post
  //req.body.title
  async search(req, res) {
    try {
      const post = await Post.find({ title: req.body.title });
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export var postController = new PostController();
