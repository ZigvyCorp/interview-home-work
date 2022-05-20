var Post = require("../models/post.model.js");

module.exports.getPosts = async function (req, res) {
	var posts = await Post.find()  
	res.json(posts.toObject())
}

