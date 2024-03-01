const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:123@127.0.0.1:5432/pre_interview')

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default connectDB