const express = require('express');
const PostsRouter = express.Router();
const PostSchema = require('../../../database/models/post');
const { isAuthenticated, isPostAuthor } = require('../../../middlewares/middlewares');

PostsRouter.post('/', isAuthenticated, async (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const tags = req.body.tags;

    try {
        const newPost = await PostSchema.create({ owner: req.headers.username, title: title, content: content, tags: tags });
        return res.send({ post: newPost });
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

PostsRouter.get('/', async (req, res, next) => {
    try {
      const postPerPage = !isNaN(Number(req.query.limit)) ? parseInt(req.query.limit) : 2; // TODO: Remember to make this value a constant
      const page = !isNaN(Number(req.query.page)) ? parseInt(req.query.page): 0;

      const posts = await PostSchema.find().limit(postPerPage).skip(postPerPage * page).sort({ created_at: 'asc'});
      return res.send({posts, limit: postPerPage, page});
    } catch (err) {
      next(err);
    }
});

PostsRouter.put('/:id', [isAuthenticated, isPostAuthor], async (req, res, next) => {
    const id = req.params.id;
    const title = req.body.title;
    const content = req.body.content;
    const tags = req.body.tags;

    try {
        const post = await PostSchema.findById(id);
        if (typeof post === 'undefined') return res.status(400).send({ error: 'The target post id does not exist' });

        if (typeof title !== 'undefined') post.title = title;
        if (typeof content !== 'undefined') post.content = content;
        if (typeof tags !== 'undefined') post.tags = tags;
        await post.save();
        return res.send({ msg: 'The post is updated successfully' });
    } catch (err) {
        next(err);
    }
});

PostsRouter.delete('/:id', [isAuthenticated, isPostAuthor], async (req, res, next) => {
    const id = req.params.id;
    try {
        const post = await PostSchema.findById(id);
        if (typeof post === 'undefined') return res.status(400).send({ error: 'The target post id does not exist' });

        await PostSchema.deleteOne({ _id: id });
        return res.send({ msg: 'The post is deleted successfully' });
    } catch (err) {
        next(err);
    }
});

module.exports = PostsRouter;