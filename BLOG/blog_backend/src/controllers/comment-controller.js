const commentService = require("../services/comment-service");
const postService = require("../services/post-service");
const { commentModel } = require("../models");

exports.create = async (req, res, next) => {
  try {
    const body = req.body.body;
    const { postId, userId } = req.params;

    const callbackService = (error, response) => {
      if (!error) {
        res.status(201).send(response);
      } else {
        res.status(400).send(error);
      }
    };

    await postService.addComment({ postId, userId, body }, callbackService);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

exports.findByUserId = function (req, res) {
  const params = req.params || {};
  const query = {
    userId: params.userId,
  };
  if (!query) {
    res.status(400).send("Bad Request");
    return;
  }

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

  commentService.findCommentByUserId(query, callbackService);
};

exports.updateById = function (req, res) {
  const body = req.body;

  if (!body.id) {
    res.status(400).send("Id is missing");
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
  commentService.updateCommentById(body.id, updateData, callbackService);
};

exports.update = function (req, res) {
  const body = req.body;
  const query = body.query;
  const data = body.data;
  const options = body.options;
  if (!query) {
    res.status(400).send("Bad request");
    return;
  }

  const callbackService = (err, response) => {
    if (response) {
      res.status(200).send(response);
    } else if (err) {
      res.status(400).send(err);
    }
  };

  commentService.updateComment(query, data, options, callbackService);
};

exports.delete = function (req, res) {
  const body = req.body || {};
  const query = body.query;
  if (!query) {
    res.status(400).send("Bad Request");
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

  commentService.deleteComment(query, callbackService);
};
