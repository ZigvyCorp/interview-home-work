const Post = require('../models/Post.js')
const User = require('../models/User.js')
const mongoose = require('mongoose');
module.exports = (req, res) => {
    Post.find({},null,{sort: {created_at: -1}}, async (error, posts)=> {
        for (let i = 0; i < posts.length; i++) {
            var _id = new mongoose.Types.ObjectId(posts[i].owner)
            // console.log(_id)
            await User.findById(_id, (err, user) => {
                if (user) {
                    posts[i].author = user.name
                }
                if (!user || err) {
                    posts[i].author = 'Zigvy\'s User';
                }
            })

        }
        // console.log(posts)
        res.render('index', {
            blogposts: posts
        });
    })
}