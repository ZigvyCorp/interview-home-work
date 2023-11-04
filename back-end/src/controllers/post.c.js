import { postModel } from "../models/post.m.js";
import { failedResponse, successResponse } from "../utils/response.js";

export const getAllPosts = (req, res) => {
  const searchTitle = req.query.title;
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
      {
        $lookup: {
          from: "comments",
          localField: "id",
          foreignField: "post",
          as: "comments",
        },
      },
    ])
    .then((posts) => {
      const response = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTitle?.toLowerCase() || "")
      );
      // }
      return res.status(200).json(successResponse({ posts: response }));
    })
    .catch((e) => res.status(500).json(failedResponse(e.message)));
};

export const getPostById = async (req, res) => {
  const id = Number(req.params.id);
  return postModel
    .aggregate([
      { $match: { id } },
      {
        $lookup: {
          from: "users",
          localField: "owner",
          foreignField: "id",
          as: "author",
        },
      },
      {
        $lookup: {
          from: "comments",
          localField: "id",
          foreignField: "post",
          as: "comments",
        },
      },
    ])
    .then((posts) => {
      return res.status(200).json(successResponse({ post: posts[0] }));
    })
    .catch((e) => res.status(500).json(failedResponse(e.message)));
};
