const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('./models/posts')
require('./models/comments')
require('./models/users')
const Post = mongoose.model("post")
const Comment = mongoose.model("comment")
const User = mongoose.model("user")


app.use(cors());

const mongoUri = "mongodb+srv://admin1:mloSxap8SwotVjqx@cluster0.lzwva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"   

mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology : true
})

mongoose.connection.on("connected",()=>{
    console.log('connect Success')
})

mongoose.connection.on("error",(err)=>{
    console.log('error', error)
})


app.post('/delete',(req,res) =>{
    Post.findByIdAndDelete(req.body.id)
    .then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err =>{
        console.log("error", err)
    })
})

app.post('/update',(req,res) =>{
    Post.findByIdAndUpdate(req.body.id,{
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position,

    })
    .then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err =>{
        console.log("error", err)
    })
})

app.post('/send-data',(req,res)=>{
    const emp = new Post({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position,
    })
    emp.save().then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.get('/post2',(req,res)=>{
    Post.find({}).populate({path: 'user',id: 'owner'})
    .then(data =>{
        res.send(data)
        console.log(data[0].owner)
    }
)
})

app.get('/post1',(req,res)=>{
    Post.aggregate([{
        $lookup:
        {
            from: 'users',
            localField:'owner',
            foreignField: 'id',
            as:"user"
            
        }
    },{

        $lookup:{
            from: 'comments',
            localField: 'id',
            foreignField: 'post',
            as:"comments",
            
        }
    }
    ]
).then(data =>{
        res.send(data)
    })
    
})

app.get('/post',(req,res)=>{
    Post.find({})
    .then(data =>{
        res.send(data)
    }).catch(err =>{
        console.log(err)
    })
})

app.get('/user',(req,res)=>{
    User.find({})
    .then(data =>{
        res.send(data)
    }).catch(err =>{
        console.log(err)
    })
})

app.get('/cmt',(req,res)=>{
    Comment.find({})
    .then(data =>{
        res.send(data)
    }).catch(err =>{
        console.log(err)
    })
})

app.listen(3000,()=>{
    console.log("server running")
})