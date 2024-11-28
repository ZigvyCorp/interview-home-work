require('dotenv').config();
const mongoose = require('mongoose');
const axios = require("axios");
const Post = require('../models/post.model');
const User = require('../models/user.model');
const Album = require('../models/album.model');
const Photo = require('../models/photo.model');
const Todo = require('../models/todo.model');
const Comment = require('../models/comment.model');

async function seed() {
    await mongoose.connect(process.env.CONNECTION_STRING);

    try {
        const users = await axios.get('https://jsonplaceholder.typicode.com/users')
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const albums = await axios.get('https://jsonplaceholder.typicode.com/albums')
        const photos = await axios.get('https://jsonplaceholder.typicode.com/photos')
        const todos = await axios.get('https://jsonplaceholder.typicode.com/todos')
        const comments = await axios.get('https://jsonplaceholder.typicode.com/comments')

        await User.insertMany(users.data);
        await Post.insertMany(posts.data);
        await Album.insertMany(albums.data);
        await Photo.insertMany(photos.data);
        await Todo.insertMany(todos.data);
        await Comment.insertMany(comments.data);
    } catch (error) {
        console.log(error);
    }

    await mongoose.connection.close();
}

seed();