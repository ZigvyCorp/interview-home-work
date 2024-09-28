// E:\zigvy\truong_2024_2\zigvy-interview-blog\backend\controllers\postController.js
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');
const User = require('../models/userModel');

exports.getPosts = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';

    try {
        const query = {};
        if (search) {
            query.title = {$regex: search, $options: 'i'};
        }

        const totalPosts = await Post.countDocuments(query);

        const posts = await Post.find(query)
            .sort({created_at: -1})
            .skip((page - 1) * limit)
            .limit(limit);

        const postsWithDetails = await Promise.all(posts.map(async (post) => {
            const user = await User.findOne({id: post.owner});
            const authorName = user ? user.name : 'Unknown';
            const commentsCount = await Comment.countDocuments({post: post.id});

            return {
                ...post._doc,
                authorName,
                commentsCount,
            };
        }));

        res.json({
            posts: postsWithDetails,
            currentPage: page,
            totalPages: Math.ceil(totalPosts / limit),
            hasMore: page < Math.ceil(totalPosts / limit),
        });
    } catch (error) {
        res.status(500).json({message: 'Server error: ' + error});
    }
};

exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post) {
            const user = await User.findOne({ id: post.owner });
            const authorName = user ? user.name : 'Unknown';

            res.json({
                ...post._doc,
                authorName,
            });
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error: ' + error });
    }
};

exports.createPost = async (req, res) => {
    const {owner, title, content, tags} = req.body;

    try {
        const lastPost = await Post.findOne().sort({id: -1});
        const newId = lastPost ? lastPost.id + 1 : 1;

        const post = new Post({
            id: newId,
            owner,
            title,
            content,
            created_at: Date.now(),
            tags
        });

        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json({message: 'Server error: ' + error});
    }
};

exports.updatePost = async (req, res) => {
    const {title, content, tags} = req.body;

    try {
        const post = await Post.findById(req.params.id);

        if (post) {
            post.title = title || post.title;
            post.content = content || post.content;
            post.tags = tags || post.tags;

            const updatedPost = await post.save();
            res.json(updatedPost);
        } else {
            res.status(404).json({message: 'Post not found'});
        }
    } catch (error) {
        res.status(500).json({message: 'Server error: ' + error});
    }
};

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post) {
            await Post.deleteOne({_id: req.params.id});
            res.json({message: 'Post deleted'});
        } else {
            res.status(404).json({message: 'Post not found'});
        }
    } catch (error) {
        res.status(500).json({message: 'Server error: ' + error});
    }
};
