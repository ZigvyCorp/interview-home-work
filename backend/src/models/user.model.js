const { DataTypes } = require("sequelize");
const DB = require("../dbs/init.postgres");

const User = DB.sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
    },
    {
        tableName: "users",
        underscored: true,
        timestamps: true,
    }
);

module.exports = User;
