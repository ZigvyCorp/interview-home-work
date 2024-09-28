const mongoose = require('mongoose');

// Kết nối tới MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/zigvy_interview_blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000 // Tăng thời gian chờ lên 30 giây
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Dừng chương trình nếu kết nối thất bại
    }
};

module.exports = connectDB;
