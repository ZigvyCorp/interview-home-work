
const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Post = require('../db').Post;
const User = require('../db').User;
var ObjectId = require('mongoose').Types.ObjectId; 

async function getAllPost(){
    let posts = await Post.find();
    // const postArray = [];
    // for(let i =0; i<posts.length; i++){
    //     const user = await User.findById("5e88bd91fa29ef1924e6748d");
    //     postArray.push({...posts[i]._doc,username: user.name})
    // }
    const promises = posts.map(async (post)=>{
        const user = await User.findById(new ObjectId(post.owner));
        return {...post._doc,username: user.name}
    })
    posts = await Promise.all(promises);
    return posts;
}

async function create(postParam) {
    const user = new Post(postParam);
    // save post
    return await user.save();
}  

async function getByKeyWord(keyWord){
    let posts = await Post.find({$or: [ { title: { $regex: keyWord, $options: 'i' }}, { tags: {"$in":keyWord} } ]})
    const promises = posts.map(async (post)=>{
        const user = await User.findById(new ObjectId(post.owner));
        return {...post._doc,username: user.name}
    })
    posts = await Promise.all(promises);
    return posts;
    //return await Post.aggregate([{ $match: { content: { $regex: keyWord, $options: 'i' }}}])
}


module.exports = {
    getAllPost,
    create,
    getByKeyWord,
};