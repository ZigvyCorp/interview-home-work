const { Router } = require("express");
const validate = require("../../helper/validate");
const {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
} = require("./comments.controller");
const {
  getCommentParamsSchema,
  getCommentQuerySchema,
  createCommentBodySchema,
  updateCommentBodySchema,
} = require("./schemas");
const router = Router();

router
  .get("/", validate({ query: getCommentQuerySchema }), getComments)
  .get("/:id", validate({ params: getCommentParamsSchema }), getComment)
  .post("/", validate({ body: createCommentBodySchema }), createComment)
  .patch(
    "/:id",
    validate({ params: getCommentParamsSchema, body: updateCommentBodySchema }),
    updateComment
  )
  .delete("/:id", validate({ params: getCommentParamsSchema }), deleteComment);

module.exports = router;
