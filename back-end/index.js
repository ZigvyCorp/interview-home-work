import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './modals/userModal.js';
import Post from './modals/postModal.js'
import Comment from './modals/comementModal.js'

const app = express()


app.use(cors())
app.use(express.json());
// app.use(express.urlencoded({extended: false}))


app.post('/users/signUp', async(req,res)=>{
  try {
    const body = await req.body;
    const {username,password,name,created_at,dob} = body;

    const user =  new User({
        username,
        password,
        name,
        dob,
        created_at
    });
    const result = await user.save();
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})
// how we start the listening to server

app.get('/users/signUp', (req,res)=>{
    const user = new User({
        username: 'linhthai',
        password: '123456',
        name:'Son',
        dob:'jfjflla',
        created_at:131344
    });

    user.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/users', async(req,res)=>{
    try {
        const result = await User.find();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get('/users/signIn', async(req,res)=>{
    try {
        const result = await User.find();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.post('/posts/add', async(req,res)=>{
    try {
        const body = req.body;
        const {owner,title,content,createAt,tagArray} = body;

        const post = new Post({
            owner,
            title,
            content,
            created_at:createAt,
            tags:tagArray
        });
        const result = await post.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get('/posts', async(req,res)=>{
    try {
        const result = await Post.find();
        res.status(200).json(result); 
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get('/comments',async(req,res)=>{
    try {
        const result =  new Comment({
            owner:"654c806256ee642f42d7dbe8",
            post:"654c825156ee642f42d7dbf6",
            content:"Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.",
            created_at:1576506719083
        });
        const result2 = await result.save();
        res.status(200).json({result2})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get('/comments/take',async(req,res)=>{
    try {
        const result = await Comment.find();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

mongoose.connect('mongodb+srv://try:m8xPOy0HzDiz48oO@cluster0.xo15b4l.mongodb.net/try?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('connect to mongoDB')
    app.listen(3001, ()=>{
        console.log("node api run in localhost: 3001")
    })
}).catch((error)=>{
    console.log(error)
})
 
