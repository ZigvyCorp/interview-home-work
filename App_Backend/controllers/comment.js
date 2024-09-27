const Comment = require('../models/comment');

async function createByPost(req, res) {
    const post = req.params.id
    try {
        const userId = req.user.id; 
        const { content } = req.body; 
        const newComment = await Comment.create({
            owner: userId, 
            post,          
            content        
        });

        res.status(201).json(newComment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function getAllByPost(req, res) {
    try {
        const comments = await Comment.findAll({
            where: { post: req.params.id }
        });
        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function update(req, res) {
    const { id } = req.params;
    const { content } = req.body;
    const userId = req.user.id; 
    try {
        const comment = await Comment.findByPk(id); 
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        if (comment.owner !== userId) {
            return res.status(403).json({ message: 'You do not have permission to edit this comment' });
        }

        comment.content = content || comment.content; 
        await comment.save(); 

        res.json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function _delete(req, res) {
    const { id } = req.params;
    const userId = req.user.id; 
    try {
        const comment = await Comment.findByPk(id); 
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        if (comment.owner !== userId) {
            return res.status(403).json({ message: 'You do not have permission to delete this comment' });
        }

        await comment.destroy(); n

        res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    createByPost,
    getAllByPost,
    update,
    _delete
};
