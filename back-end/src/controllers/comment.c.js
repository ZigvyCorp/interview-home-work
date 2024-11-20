import { commentModel } from "../models/comment.m.js";
import { failedResponse, successResponse } from "../utils/response.js";

export const getCommentsByPostId = (req, res) => {
  const postId = Number(req.params.postId);
  return commentModel
    .aggregate([
      {
        $match: {
          post: postId,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "owner",
          foreignField: "id",
          as: "owner_info",
        },
      },
    ])
    .then((comments) => res.status(200).json(successResponse({ comments })))
    .catch((e) => res.status(500).json(failedResponse(e.message)));
};
