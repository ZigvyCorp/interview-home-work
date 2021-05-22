const CommentService = require("./comments.service");
const { dbErrors } = require("../../data");

const getComments = (req, res) => {
  const { postId } = req.query;

  try {
    const comments = CommentService.getComments(+postId);
    res.status(200).send({ message: "The Comments", data: comments });
  } catch (error) {
    
    if (error instanceof dbErrors.NotFound) {
      res.status(404).send({ message: error.message });
    }

    res.status(500).send({ message: "Internal Server Error" });
  }
};

const getComment = (req, res) => {
  const { id } = req.params;

  try {
    const comment = CommentService.getComment(+id);
    res.status(200).send({ message: "Comment is", comment });
  } catch (error) {
    if (error instanceof dbErrors.NotFound) {
      res.status(404).send({ message: error.message });
    }

    res.status(500).send({ message: "Internal Server Error" });
  }
};

const createComment = (req, res) => {
  const fieldToCreate = req.body;
  const { postId } = req.query;

  try {
    const createdComment = CommentService.createComment(+postId, fieldToCreate);
    res
      .status(200)
      .send({ message: "Comment has been created", createdComment });
  } catch (error) {
    if (error instanceof dbErrors.NotFound) {
      res.status(404).send({ message: error.message });
    }

    res.status(500).send({ message: "Internal Server Error" });
  }
};

const updateComment = (req, res) => {
  const { id } = req.params;
  const fieldToUpdate = req.body;

  try {
    CommentService.updateComment(+id, fieldToUpdate);
    res.status(200).send({ message: "Comment has been updated" });
  } catch (error) {
    if (error instanceof dbErrors.NotFound) {
      res.status(404).send({ message: error.message });
    }

    res.status(500).send({ message: "Internal Server Error" });
  }
};

const deleteComment = (req, res) => {
  const { id } = req.params;

  try {
    CommentService.deleteComment(+id);
    res.status(200).send({ message: "Comment has been deleted" });
  } catch (error) {
    if (error instanceof dbErrors.NotFound) {
      res.status(404).send({ message: error.message });
    }

    res.status(500).send({ message: "Internal Server Error" });
  }
};
module.exports = {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
};
