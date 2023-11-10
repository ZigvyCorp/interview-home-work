const mongoose = require('mongoose');
const connectionDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://phuc:123@cluster0.1xa0l.mongodb.net/Test?retryWrites=true&w=majority');
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
    }
}
module.exports = connectionDB;