const Posts = require('../models/postModel');

const postCrl = {
  createPost: async (req, res) => {
    try {
      const { email, name, body } = req.body; // Assuming title and content are part of the request body

      // Validate that title and content are present
      if (!email || !name || !body) {
        return res
          .status(400)
          .json({ ErrorMessage: 'Please fill out all fields completely!.' });
      }

      const newPost = new Posts({
        email,
        name,
        body,
        // Add other fields as needed
      });

      const savedPost = await newPost.save();

      res.json({
        ResultMessage: 'Post created successfully!',
        post: savedPost,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getAllPosts: async (req, res) => {
    try {
      const { PageIndex = 1, PageSize = 10, SearchContent = '' } = req.query;

      const skip = (parseInt(PageIndex) - 1) * parseInt(PageSize);

      const searchQuery = { $regex: new RegExp(SearchContent, 'i') };
      const query = {
        $or: [
          { email: searchQuery },
          { body: searchQuery },
          { name: searchQuery },
        ],
      };

      const totalPosts = await Posts.countDocuments(query);
      const posts = await Posts.find(query)
        .sort('-createdAt')
        .skip(skip)
        .limit(parseInt(PageSize));
      const totalPage = Math.ceil(totalPosts / parseInt(PageSize));

      res.json({
        msg: 'Success!',
        result: posts.length,
        TotalItem: totalPosts,
        TotalPage: totalPage,
        posts,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updatePost: async (req, res) => {
    try {
      const { _id, email, name, body } = req.body;

      // Validate that _id, email, name, and body are present
      if (!_id || !email || !name || !body) {
        return res.status(400).json({
          ErrorMessage:
            'Please provide the _id and fill out all fields completely!',
        });
      }

      // Find the post by _id
      const existingPost = await Posts.findById(_id);

      if (!existingPost) {
        return res.status(404).json({ ErrorMessage: 'Post not found!' });
      }

      existingPost.email = email;
      existingPost.name = name;
      existingPost.body = body;

      // Save the updated post
      const updatedPost = await existingPost.save();

      res.json({
        ResultMessage: 'Post updated successfully!',
        post: updatedPost,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deletePost: async (req, res) => {
    try {
      const post = await Posts.findOneAndDelete({
        _id: req.params.id,
      });

      res.json({
        ResultMessage: 'Deleted Post!',
        newPost: {
          ...post,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getDetailID: async (req, res) => {
    try {
      const { id } = req.params;

      // Validate that postId is present
      if (!id) {
        return res
          .status(400)
          .json({ ErrorMessage: 'Please provide a valid postId.' });
      }

      // Find the post by postId
      const post = await Posts.findById(id);

      // Check if the post with the provided postId exists
      if (!post) {
        return res.status(404).json({ ErrorMessage: 'Post not found!' });
      }

      res.json({
        ResultMessage: 'Post details retrieved successfully!',
        post,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  addCommentToPost: async (req, res) => {
    try {
      const { postId, commentData } = req.body;

      if (!postId || !commentData) {
        return res
          .status(400)
          .json({ ErrorMessage: 'Please provide postId and commentData!' });
      }

      const post = await Posts.findById(postId);

      if (!post) {
        return { error: 'Post not found!' };
      }
      const newComments = commentData.map((comment) => ({
        userName: comment.userName,
        content: comment.content,
      }));

      post.comments.push(...newComments);

      const updatedPost = await post.save();

      res.json({
        ResultMessage: 'Add Comment for post successfully!',
        post: updatedPost,
      });
    } catch (error) {
      return { error: error.message };
    }
  },
  //   getAllPosts: async (req, res) => {
  //     try {

  //       const posts = await Posts.find()

  //       res.json({
  //         msg: 'Success!',
  //         result: posts.length,

  //         posts,
  //       });
  //     } catch (err) {
  //       return res.status(500).json({ msg: err.message });
  //     }
  //   },
};
module.exports = postCrl;
