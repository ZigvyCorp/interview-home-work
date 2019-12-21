const express = require('express');
const PostsRouter = express.Router();
const PostSchema = require('../../../database/models/post');
const { isAuthenticated, isPostAuthor } = require('../../../middlewares/middlewares');

PostsRouter.post('/', isAuthenticated, async (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const tags = req.body.tags;

    try {
        await PostSchema.create({ owner: req.headers.username, title: title, content: content, tags: tags });
        return res.send({ msg: 'New post created' });
    } catch (err) {
        next(err);
    }
});

PostsRouter.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const post = await PostSchema.findById(id);
        const returnValues = {
            id: post._id,
            owner: post.owner,
            title: post.title,
            content: post.content,
            tags: post.tags,
            created_at: post.created_at
        }
        return res.send({ data: returnValues });
    } catch (err) {
        next(err);
    }
});

PostsRouter.get('/', (req, res, next) => {
    return res.send({ msg: "Haven't implemented yet" });
});

PostsRouter.put('/:id', [isAuthenticated, isPostAuthor], async (req, res, next) => {
    const id = req.params.id;
    const title = req.body.title;
    const content = req.body.content;

    try {
        const post = await PostSchema.findById(id);
        if (typeof title !== 'undefined') post.title = title;
        if (typeof content !== 'undefined') post.content = content;
        await post.save();
        return res.send({ msg: 'The post is updated successfully' });
    } catch (err) {
        next(err);
    }
});

PostsRouter.delete('/:id', [isAuthenticated, isPostAuthor], async (req, res, next) => {
    const id = req.params.id;
    try {
        await PostSchema.deleteOne({ _id: id });
        return res.send({ msg: 'The post is deleted successfully' });
    } catch (err) {
        next(err);
    }
});

module.exports = PostsRouter;