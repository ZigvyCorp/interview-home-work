import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';
import authRoute from './routers/auth.js';
import userRoute from './routers/user.js';
import dotenv from 'dotenv';

dotenv.config();
 
const app = express();
const PORT = process.env.PORT || 5000;
const URI = 'mongodb+srv://admin:phu123456@cluster0.9efe8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());



app.get('/',(req,res)=>{
    res.send('succes');
});

app.use('/posts',posts);
app.use('/auth',authRoute);
app.use('/users',userRoute);
mongoose.connect(URI,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{
console.log('connected to db');

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
});
}).catch((err) => {
    console.log('err',err);
});

