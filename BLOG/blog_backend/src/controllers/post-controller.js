const postService = require("../services/post-service");
const { postModel } = require("../models");

exports.create = function (req, res, next) {
  const body = new postModel(req.body);

  const callbackService = (error, response) => {
    if (response) {
      res.status(201).send(response);
    } else if (error) {
      res.status(400).send(error);
    }
  };
  postService.createPost(body, callbackService);
};

exports.findAll = async (req, res) => {
  var query = {}; 
  if (req.query.search) {
    query = {
      title: { $regex: req.query.search, $options: "i" },
    };
  }

  const page = parseInt(req.query.page) || 1;
  const limit = 5;
  const skip = (page - 1) * limit;

  const callbackService = (error, response) => {
    if (error) {
      res.status(404).send(error);
      return;
    }
    if (response) {
      res.status(200).send(response);
      return;
    }
    if (!response) {
      res.status(204).send("No Data Found");
    }
  };

  postService.findPostsAndCount(query, { limit, skip }, callbackService);
};

exports.findById = function (req, res) {
  const postId = req.params.posId;
  if (!postId) {
    res.status(400).send("Post ID is required");
    return;
  }

  const callbackService = (error, response) => {
    if (error) {
      res.status(500).send(error);
      return;
    }
    if (response) {
      res.status(200).send(response);
      return;
    }
    res.status(404).send("Post not found");
  };

  postService.findPostById(postId, callbackService);
};

exports.updateById = function (req, res) {
  const postId = req.params.id;

  if (!postId) {
    res.status(400).send("Post ID is required");
    return;
  }
  const updateData = body.data || {};
  callbackService = (err, response) => {
    if (response) {
      res.status(200).send(response);
    } else if (err) {
      res.status(400).send(err);
    }
  };
  postService.updatePostById(postId, updateData, callbackService);
};

exports.deleteById = function (req, res) {
  const postId = req.params.id;

  if (!postId) {
    res.status(400).send("Post ID is required");
    return;
  }

  const callbackService = (error, response) => {
    if (error) {
      res.status(400).send(error);
      return;
    }
    if (response) {
      if (response.n === 1 && response.ok === 1) {
        res.status(202).send(body);
      }
      if (response.n === 0 && response.ok === 1) {
        res.status(204).send({
          message: "No data found",
        });
      }
    }
  };

  postService.deletePost(postId, callbackService);
};
