import express from "express"
import cors from "cors"
import users from "./routes/userRoute.js"
import posts from "./routes/postRoute.js"
import comments from "./routes/commentRoute.js"
import * as dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_DB;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));

//Routes 
app.use('/post', posts);
app.use('/user', users);
app.use('/comment', comments);


mongoose
    .connect(URL)
    .then(() => {
        console.log('Connected to DB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('err', err);
    });