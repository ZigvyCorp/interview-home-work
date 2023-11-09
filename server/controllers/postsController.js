const { Posts } = require("../models");

const postsController = {
  addPost: async (req, res) => {
    const { owner, title, content, tags } = req.body;

    if (!owner || !title || !content)
      return res
        .status(400)
        .json({ success: false, message: "Missing this post!" });

    try {
      const newPost = new Posts({
        owner,
        title,
        content,
        tags,
      });
      await newPost.save();

      res.status(200).json(newPost);
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Error" });
    }
  },
};

module.exports = postsController;
