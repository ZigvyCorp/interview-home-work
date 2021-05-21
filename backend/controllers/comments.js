const Comment = require('../models/comments');

exports.addComment = async (req, res) =>{
	const comment = new Comment(req.body);
	comment.save((err, data) => {
		err ? res.status(500).send('Fail') : res.status(200).send(data);
	})
}

exports.updateComment = async (req, res) => {
	Comment.updateOne({_id: req.params.id}, { $set: req.body }, (err, data) => {
		err ? res.status(500).send('Fail') : res.status(200).send('Success');
	})
}

exports.getComments = async (req, res) => {
	// Comment.find({}, (err, comments) => {
	// 	err ? res.status(404).send('Fail') : res.status(200).send(comments);
	// })

	Comment
		.find({})
		.populate('owner')
		.populate({
			path: 'owner',
			select: ['name','dob']
		})
		.populate('post')
		.populate({
			path: 'post',
			select: ['title','tags']
		})
		.exec((err, comments) => {
			err ? res.status(404).send('Fail') : res.status(200).send(comments);
		})
}

exports.getComment = async (req, res) => {
    Comment
		.findOne({_id: req.params.id})
		.populate('owner')
		.populate({
			path: 'owner',
			select: ['name','dob']
		})
		.populate('post')
		.populate({
			path: 'post',
			select: ['title','tags']
		})
		.exec((err, comment) => {
			err ? res.status(404).send('Fail') : res.status(200).send(comment);
		})
};