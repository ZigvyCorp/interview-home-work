'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Comment, { foreignKey: 'commentId', targetKey: 'id', as: 'comments' })
            User.hasMany(models.Post, { foreignKey: 'postId', targetKey: 'id', as: 'posts' })
        }
    }
    User.init({
        id: DataTypes.INTEGER,
        userName: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING,
        postId: DataTypes.INTEGER,
        commentId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'User',
        freezeTableName: true
    });
    return User;
};