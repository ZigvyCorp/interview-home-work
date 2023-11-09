import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const getAllUser = async (req, res) => {
  let users;
  try{
    users = await User.find();
    res.status(200).json(users);
  }catch(err){
    res.status(500).json(err);
  }
}

export const signup = async (req, res) => {
  const { name, username, password, dob } = req.body;

  let existingUser;
  try{
    existingUser = await User.findOne({ username });
  }catch(err){
    res.status(500).json(err);
  }
  if(existingUser){
    res.status(400).json({message: 'User already exists'});
  }
  const hashedPassword = bcrypt.hashSync(password);
  const newUser = new User({
    name,
    username,
    password: hashedPassword,
    dob,
    blogs: [],
  });
  try{
    const user = await newUser.save();
    res.status(201).json(user);
  }catch(err){
    res.status(500).json(err);
  }
}

export const login = async (req, res) => {
  const { username, password } = req.body;
  let existingUser;
  try{
    existingUser = await User.findOne({ username });
    if(existingUser && bcrypt.compareSync(password, existingUser.password)){
      res.status(200).json(existingUser);
    }else{
      res.status(401).json({message: 'Invalid username or password'});
    }
  }catch(err){
    res.status(500).json(err);
  }
}