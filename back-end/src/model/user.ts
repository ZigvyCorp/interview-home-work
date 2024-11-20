'use strict';

// Utilities
import { Sequelize } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

const MODEL_NAME = 'User';
const TABLE_NAME = 'Users';

class User extends Model {}

User.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },

    name: {
      allowNull: true,
      type: DataTypes.STRING,
    },

    aliasName: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.STRING,
    },

    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    phone: {
      allowNull: true,
      type: DataTypes.STRING,
    },

    updatedDate: {
      allowNull: true,
      type: DataTypes.DATE,
    },

    deletedDate: {
      allowNull: true,
      type: DataTypes.DATE,
    },

    createdDate: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    modelName: MODEL_NAME,
    tableName: TABLE_NAME,
    sequelize: new Sequelize(),

    paranoid: true,
    timestamps: true,

    createdAt: 'createdDate',
    deletedAt: 'deletedDate',
    updatedAt: 'updatedDate',

    scopes: {
      available: {
        where: {
          deletedDate: null,
        },
      },
    },
  },
);

module.exports = User;
