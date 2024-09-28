const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const JWT_SECRET = '6c3e97fa7d45b8c27d4c25ba9dd6781234a4532bf87a0d9f685b742bd94af8e8e5d7c1234a2e0bbaedc6fef7239fdce4';

const generateToken = (user) => {
    return jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: '30d'});
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({message: 'Server error: ' + error});
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({message: 'Server error'});
    }
};

exports.createUser = async (req, res) => {
    const { username, password, name, dob } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    const lastUser = await User.findOne().sort({ id: -1 });
    const newId = lastUser ? lastUser.id + 1 : 1;

    const user = new User({
        id: newId,
        username,
        password,
        name,
        dob,
        created_at: Date.now()
    });

    try {
        const savedUser = await user.save();
        res.status(201).json({
            _id: savedUser._id,
            id: savedUser.id,
            username: savedUser.username,
            name: savedUser.name,
            dob: savedUser.dob,
            token: generateToken(savedUser)
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error: ' + error });
    }
};

exports.updateUser = async (req, res) => {
    const {name, dob} = req.body;

    try {
        const user = await User.findById(req.params.id);

        if (user) {
            user.name = name || user.name;
            user.dob = dob || user.dob;

            const updatedUser = await user.save();
            res.json(updatedUser);
        } else {
            res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({message: 'Server error'});
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (user) {
            await User.deleteOne({_id: req.params.id});
            res.json({message: 'User removed'});
        } else {
            res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({message: 'Server error: ' + error});
    }
};

exports.loginUser = async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username});

        if (user && user.password === password) {
            res.json({
                _id: user._id,
                username: user.username,
                name: user.name,
                token: generateToken(user)
            });
        } else {
            res.status(401).json({message: 'Invalid credentials'});
        }
    } catch (error) {
        res.status(500).json({message: 'Server error'});
    }
};
