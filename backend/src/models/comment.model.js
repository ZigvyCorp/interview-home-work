const { DataTypes } = require("sequelize");
const DB = require("../dbs/init.postgres");

const Comment = DB.sequelize.define(
    "Comment",
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
        post: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: "comments",
        underscored: true,
        timestamps: true,
    }
);

module.exports = Comment;
