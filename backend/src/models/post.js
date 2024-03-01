'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {
            Post.hasMany(models.Comment, { foreignKey: 'commentId', targetKey: 'id', as: 'comments' })
            Post.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id', as: 'user' })
        }
    }
    Post.init({
        id: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        body: DataTypes.STRING,
        commentId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Post',
        freezeTableName: true
    });
    return Post;
};