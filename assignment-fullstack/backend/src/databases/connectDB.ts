import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI).then((data) => {
            console.log(`Database connected with ${data.connection.host}`)
        })
    }
    catch (err: any) {
        console.log(err.message);
        setTimeout(connectDB, 5000);
    }
}

export default connectDB;