import { postModel } from "../models/post.m.js";
import { userModel } from "../models/user.m.js";
import { failedResponse, successResponse } from "../utils/response.js";

export const getAllPosts = (req, res) => {
  return postModel
    .aggregate([
      {
        $lookup: {
          from: "users",
          localField: "owner",
          foreignField: "id",
          as: "author",
        },
      },
    ])
    .then((posts) => {
      return res.status(200).json(successResponse({ posts }));
    })
    .catch((e) => res.status(500).json(failedResponse(e.message)));
};

export const getPostById = async (req, res) => {
  const id = Number(req.params.id);
  return postModel
    .findOne({ id })
    .then((post) =>
      userModel.findOne({ id: post.owner }).then((author) =>
        res.status(200).json(
          successResponse({
            post: {
              id: post.id,
              owner: post.owner,
              title: post.title,
              content: post.content,
              created_at: post.created_at,
              tags: post.tags,
              author,
            },
          })
        )
      )
    )
    .catch((e) => res.status(500).json(failedResponse(e.message)));
};
