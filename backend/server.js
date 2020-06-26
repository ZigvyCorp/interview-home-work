const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true});
const connection = mongoose.connection;
connection.once('open',()=>{
	console.log('MongoDB Oke');
});

const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
app.use('/users',userRouter);
app.use('/posts',postRouter);

app.listen(port,()=>{
	console.log("hello every one to day i'm feel so good");
});