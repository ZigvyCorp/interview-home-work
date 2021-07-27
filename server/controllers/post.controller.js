import Post from "../models/post.model.js";

const postController = {
  createPost: async (req, res) => {
    try {
      const { title, content, tags } = req.body;
      const post = new Post({ title, content, tags, owner: req.user.id });
      const newPost = await post.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getPosts: async (req, res) => {
    try {
      const page = req.query.page * 1;
      console.log({ page });
      const count = await Post.countDocuments();
      const posts = await Post.find({})
        .limit(3)
        .skip((page - 1) * 3)
        .sort({ createdAt: -1 })
        .populate({
          path: "owner",
          select: "name avatar -_id",
        })
        .populate({
          path: "comments.owner",
          select: "name avatar -_id",
        });

      res.status(200).json({ count, posts });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deletePost: async (req, res) => {
    try {
      const id = req.params.id;
      await Post.findByIdAndDelete(id);
      res.status(200).json({ message: "delete successfully!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getPost: async (req, res) => {
    try {
      const id = req.params.id;
      const post = await Post.findById(id)
        .populate({
          path: "owner",
          select: "name avatar -_id",
        })
        .populate({
          path: "comments.owner",
          select: "name avatar -_id",
        })
        .lean();
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  addComment: async (req, res) => {
    try {
      const id = req.params.id;
      const { content } = req.body;
      const post = await Post.findById(id).lean();
      await Post.findByIdAndUpdate(id, { comments: [...post.comments, { content, owner: req.user.id }] }).lean();
      res.status(200).json({ message: "add comment successfully!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default postController;
