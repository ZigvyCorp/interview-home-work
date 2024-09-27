const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');

const { Op } = require('sequelize');

async function create(req, res) {
    const { title, content, tags } = req.body;
    try {
        const user = req.user.id;

        const newPost = await Post.create({
            title,
            content,
            owner: user,
            tags
        });

        res.status(201).json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function getAll(req, res) {
    try {
        const posts = await Post.findAll({
            include: [
                {
                    model: Comment,
                    as:'Comments'
                },
                {
                    model: User,
                    as: 'Owner', // Nếu Post có foreign key tới User, bạn có thể cần thay 'owner' bằng tên alias đúng nếu đã thiết lập
                    attributes: ['id', 'username', 'name'] // Chỉ lấy các thuộc tính cần thiết từ User
                }
            ]
        });
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function getById(req, res) {
    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function getByTags(req, res) {
    try {
        const { tags } = req.body; 

        if (!tags || !tags.length) {
            return res.status(400).json({ message: 'Tags array is required' });
        }

        const posts = await Post.findAll({
            where: {
                tags: {
                    [Op.contains]: tags 
                }
            }
        });

        if (!posts.length) {
            return res.status(404).json({ message: 'No posts found with the specified tags' });
        }

        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function getByUserId(req, res) {
    try {
        const userId = req.query.user_id; 

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }
        const posts = await Post.findAll({
            where: { owner: userId }
        });
        if (!posts) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function update(req, res) {
    const { id } = req.params;
    const { title, content , tags } = req.body;
    const user_id = req.user.id;
    try {
        const post = await Post.findByPk(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        if (post.owner !== user_id) {
            return res.status(403).json({ message: 'You do not have permission to edit this post' });
        }

        post.title = title || post.title;
        post.content = content || post.content;
        post.tags = tags || post.tags;

        await post.save();

        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


async function _delete(req, res) {
    const { id } = req.params;
    const user_id = req.user.id;
    try {
        const post = await Post.findByPk(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        if (post.owner !== user_id) {
            return res.status(403).json({ message: 'You do not have permission to delete this post' });
        }

        await post.destroy();

        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    getByUserId,
    getByTags,
    update,
    _delete
};
