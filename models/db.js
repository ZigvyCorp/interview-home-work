const { Sequelize } = require('sequelize');
//const sequelize = new Sequelize('postgres://postgres:@localhost:5432/todo');
module.exports = new Sequelize(process.env.DATABASE_URL||'postgres://postgres:1234@localhost:5432/todo', {
    
  // dialect: 'postgres',
  // dialectOptions: { ssl: { rejectUnauthorized: false, } }
    
  });