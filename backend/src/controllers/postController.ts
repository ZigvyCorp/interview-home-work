import { Request, Response } from "express";
import { PostService } from "../services/postService";

export class PostController {
  static async getAllPosts(req: Request, res: Response) {
    try {
        const limit = parseInt(req.query.limit as string) ; 
        const skip = parseInt(req.query.skip as string) ; 
        const query = req.query.query as string ; 
        const {posts, totalPosts} = await PostService.getAllPosts({ limit, skip, query });
        res.json({posts, totalPosts});
      } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error });
      }
  }

  static async getPostById(req: Request, res: Response) {
    try {
      const post = await PostService.getPostById(req.params.id);
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching post", error });
    }
  }

  static async createPost(req: Request, res: Response) {
    try {
      const savedPost = await PostService.createPost(req.body);
      res.status(201).json(savedPost);
    } catch (error) {
      res.status(400).json({ message: "Error creating post", error });
    }
  }

  static async updatePost(req: Request, res: Response) {
    try {
      const updatedPost = await PostService.updatePost(req.params.id, req.body);
      if (updatedPost) {
        res.json(updatedPost);
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error updating post", error });
    }
  }

  static async deletePost(req: Request, res: Response) {
    try {
      await PostService.deletePost(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Error deleting post", error });
    }
  }
}
