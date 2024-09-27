import mongoose from 'mongoose';
require('dotenv').config();

const connectMongoose = async () => {
    const connectionString = process.env.DB_CONNECTION_STRING as string || ''
    const dbName = process.env.DB_NAME as string || '' 
    try {
        await mongoose.connect(connectionString, {
            dbName: dbName
        })
        console.log('Connected database successfully');
    }
    catch (error: any) {
        console.error(`Error is occured at connectMongoose: ${error.message}`)
    }
}

export default connectMongoose