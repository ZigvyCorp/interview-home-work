const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../configs/connect"); 
const Post = require('./post');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
 
  tableName: 'users',   
  timestamps: true,     
});

module.exports = User;
