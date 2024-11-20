import mongoose from "mongoose";

const dbConnect = async () => {
    try {

        const conn = await mongoose.connect(process.env.MONGOOSE_URL)
        if (conn.connection.readyState === 1) {
            console.log("DB connected......");
        }

    } catch (error) {
        console.log('error: ', error);
        throw new Error(error);

    }
}

module.exports = dbConnect