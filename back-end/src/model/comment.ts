'use strict';

// Utilities
import { Sequelize } from 'sequelize';
import { DataTypes, Model } from 'sequelize';

const MODEL_NAME = 'Comment';
const TABLE_NAME = 'Comments';

class Comment extends Model {}

Comment.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
    },

    content: {
      allowNull: false,
      type: DataTypes.STRING,
    },

    userId: {
      allowNull: false,
      defaultValue: null,
      type: DataTypes.BIGINT,
    },

    postId: {
      allowNull: false,
      defaultValue: null,
      type: DataTypes.BIGINT,
    },

    date: {
      allowNull: false,
      type: DataTypes.DATE,
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

module.exports = Comment;
