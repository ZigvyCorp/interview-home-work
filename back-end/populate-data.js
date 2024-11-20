require('dotenv').config()
const connectDB = require('./db/connect')
const User = require('./models/User.js')
const Post = require('./models/Post.js')
const Comment = require('./models/Comment.js')

const jsonUser = require('./data/users.json')
const jsonPost = require('./data/posts.json')
const jsonComment = require('./data/comments.json')

const start= async() =>{
    try {
        await connectDB(process.env.MONGO_URI)

        //delete all data
        await User.deleteMany()      
        await Post.deleteMany()      
        await Comment.deleteMany()     

         //add json array into database
        await User.create(jsonUser)   
        await Post.create(jsonPost)   
        await Comment.create(jsonComment)   

        console.log('Success')

        process.exit(0)
    } catch (error) {
        console.log(error)

        process.exit(1)
    }
}

start()