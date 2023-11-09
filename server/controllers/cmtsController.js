const { Comments } = require("../models");
const { Posts } = require("../models");

const cmtsController = {
  //add cmt
  addCmt: async (req, res) => {
    const { content } = req.body;

    if (!content)
      return res
        .status(400)
        .json({ success: false, message: "Missing this comment!" });

    try {
      //check post owner
      const ownerId = req.params.ownerId;
      const postId = req.params.postId;
      const findP = await Posts.findById(postId);
      if (findP && findP.owner.toString() === ownerId) {
        const newCmt = Comments({
          owner: ownerId,
          post: postId,
          content,
        });
        await newCmt.save();

        res.status(200).json(newCmt);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error" });
    }
  },

  //get all cmts
  getAllCmts: async (req, res) => {
    try {
      res.status(200).json(await Comments.find());
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //delete cmt
  deleteCmt: async (req, res) => {
    try {
      await Comments.deleteOne({ _id: req.params.cmtId }).then(
        console.log("Deleted comment by id:", req.params.cmtId)
      );
      res.status(200).json(await Comments.find());
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //update cmt
  updateCmt: async (req, res) => {
    try {
      const { content } = req.body;
      await Comments.findOneAndUpdate(
        { _id: req.params.cmtId },
        { content: content },
        { new: true }
      );
      res.status(200).json(await Comments.find({ _id: req.params.cmtId }));
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = cmtsController;
