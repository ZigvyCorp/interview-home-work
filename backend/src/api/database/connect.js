import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MongooseOptions = {
    uri: process.env.DATABASE_URL,
    config: {
        'useNewUrlParser': true,
        'useFindAndModify': false,
        'useCreateIndex': true,
        'useUnifiedTopology': true
    }
};

export default async function connect() {
    await mongoose.connect(MongooseOptions.uri, MongooseOptions.config);
}