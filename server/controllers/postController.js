const Post = require('../models/post');
const Comment = require('../models/comment');

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('userId').lean();
        const comments = await Comment.find().lean();

        const postsWithComments = posts.map(post => {
            const postComments = comments.filter(comment => comment.postId.toString() === post._id.toString());
            return { ...post, comments: postComments };
        });

        res.json(postsWithComments);
    } catch (error) {
        res.status(500).json({ message: 'Error get Posts' });
    }
};

exports.getPostById = async (req, res) => {
    const { id } = req.params; 
    try {
        const post = await Post.findById(id).populate('userId').lean();
        if (!post) {
            return res.status(404).json({ message: 'Post not exits' });
        }
        const comments = await Comment.find({ postId: post._id }).lean();
        post.comments = comments;
        res.json(post); 
    } catch (error) {
        res.status(500).json({ message: 'Error get post', error });
    }
};


exports.createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: 'Error create Posts', error });
    }
};

