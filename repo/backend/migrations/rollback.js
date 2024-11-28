require('dotenv').config();
const mongoose = require('mongoose');
const axios = require("axios");
const Post = require('../models/post.model');
const User = require('../models/user.model');

async function rollback () {
    await mongoose.connect(process.env.CONNECTION_STRING);

    try {
        await User.deleteMany({});
        await Post.deleteMany({});
    } catch (error) {
        console.log(error);
    }

    await mongoose.connection.close();
}

rollback();