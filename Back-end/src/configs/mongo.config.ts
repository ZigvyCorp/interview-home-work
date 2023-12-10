import mongoose from "mongoose";
import { config } from 'dotenv';

config();

const url =
    process.env.DB_MONGO_URL && process.env.DB_MONGO_PORT && process.env.DB_NAME ?
        `mongodb://${process.env.DB_MONGO_URL}:${process.env.DB_MONGO_PORT}/${process.env.DB_NAME}` : 'mongodb://localhost:27017'

const mongoConnect =
    mongoose
        .connect(url, { dbName: process.env.DB_NAME as string })
        .then(() => console.log('DB CONNECTED'))
        .catch(err => console.log({ mongo: err }))


export default mongoConnect;