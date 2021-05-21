const Post = require('../models/posts');

exports.addPost = async (req, res) => {
    const post = new Post(req.body);
    post.save((err, data) => {
        err ? res.status(500).send('Fail') : res.status(200).send(data);
    });
};
exports.updatePost = async (req, res) => {
    Post.updateOne({ _id: req.params.id }, { $set: req.body }, (err, data) => {
        err ? res.status(500).send('Fail') : res.status(200).send('Success');
    });
};

exports.getPosts = async (req, res) => {
	const {page, limit} = req.query;
	Post.find({})
		.skip( 10 * (parseInt(page) - 1))
		.limit(parseInt(limit))
		.exec((err, posts) => {
			err ? res.status(404).send('Fail') : res.status(200).send(posts);
		})
};

exports.getPost = async (req, res) => {
    Post.findOne({ _id: req.params.id }, (err, post) => {
        err ? res.status(404).send('Fail') : res.status(200).send(post);
    });
};
