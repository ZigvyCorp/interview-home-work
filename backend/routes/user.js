const express = require('express');
const router = express.Router();
const User = require('./../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyToken = require('./../middleware/verifyToken');


router.get('/',verifyToken, (req,res)=>{
	res.json(req.user.user);
});

router.post('/register', async (req,res)=>{
	// create hashPasswrod
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);
	// create user
	const date = Date.parse(req.body.dob);
	const user = new User({
	name:req.body.name,
	username:req.body.username,
	password:hashPassword,
	dob:req.body.dob,
	create_At:req.body.create_At
	});
	try{
		// check username
		const userEs = await User.findOne({username:req.body.username});
		// username exists
		if(userEs){
			res.json({mess:'Username Exists !!!'});
		}else{ // add user -> mongodb
			const newUser = await user.save();
			res.json({newUser,mess:'Resgister Successfully !!!'});
		}
	}catch(err){
		res.status(400).json('Error: ' + err);
	}
});

router.post('/login',async (req,res)=>{
	try{
		// filter user
		const user = await User.findOne({username:req.body.username});
		//have user
		if(user){
			// check password
			const password = await bcrypt.compare(req.body.password, user.password);
			//user and password true , login successfully
			if(user && password){
				const token = jwt.sign({user:user},process.env.TOKEN_SECRET);
				res.json({token,mess:'Login Successfully !!!'});
			// password fail
			}else if(user && !password){
				res.json({mess:'Password Failed !!!'});
			}
		}else if(!user){ // user undefined
			res.json({mess:'Username Failed !!!'});
		}
	}catch(err){
		res.status(400).json('Error: ' + err);
	}
});


module.exports = router;