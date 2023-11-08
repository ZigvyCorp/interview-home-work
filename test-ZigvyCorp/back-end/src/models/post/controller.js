const Post = require('./model');

exports.getAllPosts = async (req, res) => {
  try {
    const postsData = await Post.find();
    res.json(postsData);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getPostById = async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).send("Internal Server Error");
  }
};