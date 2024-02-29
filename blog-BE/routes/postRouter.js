const express = require("express");
const postController = require("../controllers/postController");
const postRouter = express.Router();
const { validateRequest } = require("zod-express-middleware");
const { z } = require("zod");

//Get Post
postRouter.get(
  "/:id",
  validateRequest({
    params: z.object({
      id: z.preprocess((v) => Number(v), z.number()),
    }),
  }),
  postController.getPost,
);

// Get All Posts
postRouter.get(
  "/",
  validateRequest({
    query: z.object({
      page: z.preprocess((v) => Number(v), z.number()),
      perPage: z.preprocess((v) => Number(v), z.number()),
    }),
  }),
  postController.getAllPosts,
);

// Create Post
postRouter.post(
  "/",
  validateRequest({
    body: z.object({
      title: z.string({
        required_error: "Missing title",
      }),
      body: z.string({
        required_error: "Missing body",
      }),
      userId: z.number({
        required_error: "Missing userId",
      }),
    }),
  }),
  postController.createPost,
);

postRouter.put(
  "/:id",
  validateRequest({
    params: z.object({
      id: z.preprocess((v) => Number(v), z.number()),
    }),
  }),
  postController.editPost,
);

postRouter.delete(
  "/:id",
  validateRequest({
    params: z.object({
      id: z.preprocess((v) => Number(v), z.number()),
    }),
  }),
  postController.deletePost,
);

module.exports = postRouter;
