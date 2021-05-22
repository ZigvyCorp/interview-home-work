const { Router } = require("express");
const {
  getPosts,
  getPost,
  getComments,
  createPost,
  updatePost,
  deletePost,
} = require("./posts.controller");
const validate = require("../../helper/validate");
const {
  getPostParamSchema,
  createPostBodySchema,
  updatePostBodySchema,
} = require("./schemas");

const router = Router();

router
  .get("/", getPosts)
  .get("/:id", validate({ params:getPostParamSchema }), getPost)
  .get("/:id/comments", validate({ params:getPostParamSchema }), getComments)
  .post("/", validate({ body:createPostBodySchema }), createPost)
  .put("/:id", validate({params:getPostParamSchema,body:updatePostBodySchema}), updatePost)
  .delete("/:id", validate({params:getPostParamSchema}), deletePost);

module.exports = router;
