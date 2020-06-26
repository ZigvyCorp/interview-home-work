const express = require('express');
const router = express.Router();
const Post = require('./../models/post');
const verifyToken = require('./../middleware/verifyToken');

// get all posts , search and pagination
router.get('/',async (req,res)=>{
	// get keyword search from client
	let keyword = req.query.search;
	// get page from client
	let page = req.query.page;
	try{
		// when search and keyword be hashtags example: #love
		if(keyword && keyword[0] === '#'){
			// remove '#'
			keyword = keyword.slice(1);
			// count post after search tags
			const count = await Post.find({tags:keyword});
			const leng = count.length;
			// search post with keyword tags and pagination
			const listPost = await Post.find({tags:keyword}).limit(5).skip(page * 5);
			res.json({leng,listPost});
		// search title
		}else if(keyword && keyword[0] !== '#'){
			// count post after search title
			const count = await Post.find({subtitle: {$regex: new RegExp(keyword)}});
			const leng = count.length;
			// search post with keyword title and pagination
			const listPost = await Post.find({subtitle: {$regex: new RegExp(keyword)}}).limit(5).skip(page * 5);
			res.json({leng,listPost});
		}else if(!keyword){
			// when don't search && have pagination
			const listPost = await Post.find().limit(5).skip(page * 5);
			res.json({listPost});
		}
	}catch(err){
		res.status(400).json('Error: ' + err);
	}
});


// count total post use pagination
router.get('/count',async (req,res)=>{
	try{
		const listPost = await Post.find();
		const leng = listPost.length;
		res.json({leng});
	}catch(err){
		res.status(400).json('Error: ' + err);
	}
});


// get post with each user
router.get('/user', verifyToken ,async (req,res)=>{
	let id = req.user.user._id;
	try{
		const post = await Post.find({owner:id});
		res.json(post);
	}catch(err){
		res.status(400).json('Error: ' + err);
	}

});

// add post with each user
router.post('/add', async (req,res)=>{
	const post = new Post({
		owner:req.body.owner,
		name:req.body.name,
		title:req.body.title,
		subtitle:req.body.subtitle,
		content:req.body.content,
		create_At:req.body.create_At,
		tags:req.body.tags
	});

	try{
		const newPost = await post.save();
		res.json({newPost,mess:'Add Post Successfully !!!'});
	}catch(err){
		res.status(400).json('Error: ' + err);
	}
})

module.exports = router;