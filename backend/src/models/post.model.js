const { DataTypes } = require("sequelize");
const DB = require("../dbs/init.postgres");

const Post = DB.sequelize.define(
    "Post",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: "posts",
        underscored: true,
        timestamps: true,
    }
);

module.exports = Post;
