const db = require("../models");
const { sequelize } = require("../models/index");

class CommentCotroller {
  index = (req, res) => {
    res.send("Comment Controller");
  };

  getCommentByPost = async (req, res) => {
    const { postId } = req.params;
    const userId = req.userId
    try {
      let comments = await db.Comment.findAll({
        where: {
          postId: postId,
        },
        include: {
          model: db.User,
          attributes: ['name']
        },
        attributes: [
          "commentId",
          "postId",
          "content",
          "userId",
          "createdAt",
        ],
        order: [["createdAt", "DESC"]],
      });

      if(comments && comments.length > 0) {
        comments.map(comment => {
          comment.dataValues.name = comment.dataValues.User.name
          comment.dataValues.isMyComment = comment.dataValues.userId === userId ? true : false
          delete comment.dataValues['User']
        })
      }

      res.status(200).json({
        success: true,
        message: "Successfully get data",
        data: comments,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
        data: "",
      });
    }
  };

  createComment = async (req, res) => {
    const userId = req.userId
    const { postId } = req.params;
    const { content } = req.body;

    try {
      if (!content) {
        return res.status(422).json({
          success: false,
          message: "Please provide content",
          data: "",
        });
      }
      const user = await db.User.findByPk(userId)
      const comment = await db.Comment.create({
        postId: postId,
        userId: userId,
        content: content,
      });

      comment.dataValues.name = user.dataValues.name

      res.status(201).json({
        success: true,
        message: "Successfully create comment",
        data: comment,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
        data: "",
      });
    }
  };
}

module.exports = new CommentCotroller();
