const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const skip = (page - 1) * limit;

        // Fetch posts from newest to oldest
        const posts = await Post.find()
            .sort({ created_at: -1 }) // Sort by creation date in descending order
            .skip(skip)
            .limit(limit)
            .populate('owner'); // Assuming 'owner' is a reference field

        const totalPosts = await Post.countDocuments();

        res.json({
            posts,
            currentPage: page,
            totalPages: Math.ceil(totalPosts / limit),
            totalPosts
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Get post by ID
exports.getPostById = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

exports.searchPosts = async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) {
            return res.status(400).json({ message: 'Search query is required' });
        }

        const posts = await Post.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { content: { $regex: query, $options: 'i' } }
            ]
        }).populate('owner');

        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi tạo bài viết mới', error });
    }
};
