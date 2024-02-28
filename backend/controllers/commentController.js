import Comment from "../Models/Comments.js";

export const createComment = async (req, res) => {
  try {
    const { postId, creator, body } = req.body;
    console.log("create Comment");
    if (!postId || !creator || !body) {
      return res
        .status(400)
        .json({ error: "postId, userId, and body are required fields." });
    }

    const newComment = await Comment.create({
      postId,
      creator,
      body,
    });

    res.status(201).json({ success: true, data: newComment });
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const getCommentById = async (req, res) => {
  try {
    const postId = req.params.postId;
    console.log("getCommentById", postId);
    if (!postId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: "Invalid post ID format" });
    }

    const comments = await Comment.find({ postId }).populate({
      path: "creator",
      select: "_id userName",
    });
    console.log("comments", comments);
    res.status(200).json({
      success: true,
      data: comments,
    });
  } catch (error) {
    console.error("Error fetching comments by postId:", error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
