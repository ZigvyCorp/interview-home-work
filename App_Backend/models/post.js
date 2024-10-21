const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../configs/connect");
const Comment = require('./comment');
const User = require('./user');

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    owner: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
}, {
    tableName: 'posts',
    timestamps: true
});
module.exports = Post;