import asyncHandler from 'express-async-handler';
import UserModel from '../models/userModel.js';
import { generateJWT } from '../utils/generateJWT.js';

//@desc   Register a new user
//@route  POST /api/users/signup
//@access public
export const signup = asyncHandler(async (req, res) => {
	const { username, password, name, dob } = req.body;

	const userExists = await UserModel.findOne({ username });
	if (userExists) {
		res.status(400);
		throw new Error('username already exists');
	}

	const user = await UserModel.create({
		username, password, name, dob,
	})

	if (user) {
		req.session = {
			jwt: generateJWT(user),
		};

		res.status(201).send(user);
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
})

//@desc   Auth user & get token
//@route  POST /api/users/signin
//@access public 
export const signin = asyncHandler(async (req, res) => {
	const { username, password } = req.body;

	const user = await UserModel.findOne({ username });
	if (user && (await user.matchPassword(password))) {
		req.session = {
			jwt: generateJWT(user)
		};

		res.status(201).send(user);
	} else {
		res.status(400);
		throw new Error('Invalid email or password');
	}
})

//@desc		 logout
//@route 	 GET /api/users/signout
//@access	 public
export const signout = (req, res) => {
	req.session = null;

	res.send("Logout");
}

//@desc		 get current user
//@route	 GET /api/users/currentUser
//@access  public
export const currentUser = (req, res) => {
	res.send({
		currentUser: req.currentUser || null,
	})
}

//@desc   Update user profile
//@route  PUT /api/users/profile
//@access private
export const updateUserProfile = asyncHandler(async (req, res) => {
	const user = await UserModel.findById(req.currentUser.id);

	if (user) {
		user.name = req.body.name || user.name;
		user.dob = req.body.dob || user.dob;

		if (req.body.password) {
			user.password = req.body.password;
		}

		const updatedUser = await user.save();

		req.session = {
			jwt: generateJWT(updatedUser),
		};
		res.status(201).send(updatedUser)
	} else {
		res.status(404);
		throw new Error('User not found');
	}
})