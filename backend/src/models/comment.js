'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate(models) {
            Comment.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id', as: 'user' })
            Comment.belongsTo(models.Post, { foreignKey: 'postId', targetKey: 'id', as: 'post' })
        }
    }
    Comment.init({
        id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        body: DataTypes.STRING,
        postId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Comment',
        freezeTableName: true
    });
    return Comment;
};