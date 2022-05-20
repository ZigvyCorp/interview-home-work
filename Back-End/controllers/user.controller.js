var User = require("../models/user.model.js");
var Post = require("../models/post.model.js");
var Comment = require("../models/comment.model.js");

module.exports.getAllUser = async function (req, res) {
	var users = await User.find();

	res.json(users);
}

module.exports.getUser = async function (req, res) {
	var userId = req.params.idU;
	var user = await User.findOne({id: userId}); 

	res.json(user.toObject());
}

module.exports.getAllPostByUser = async function (req, res) {
	var userId = req.params.idU;
	var posts = await Post.find({userId: userId});
	var user = await User.findOne({id: userId});

	for (var i = 0; i < posts.length; i ++) {
		posts[i] = posts[i].toObject();
		posts[i].comment = await Comment.find({postId: posts[i].id});
	}

	user = user.toObject();
	user.posts = posts;

	res.json(user);

}

module.exports.getPostByUser = async function (req, res) {
	var userId = req.params.idU;
	var postId = req.params.idP;
	var user = await User.findOne({id: userId});
	var posts = await Post.findOne({userId: userId, id: postId});

	posts = posts.toObject();
	posts.comment = await Comment.find({postId: postId})

	user = user.toObject();
	user.posts = posts;

	res.json(user);

}