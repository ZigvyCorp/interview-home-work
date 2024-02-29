'use strict';
const {
  Model
} = require('sequelize');
const {formatDate} = require('../utils/formatDate');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, {foreignKey: 'userId'})
      Comment.belongsTo(models.Post, {foreignKey: 'postId'})
    }
  }
  Comment.init({
    commentId: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      get: function() {
        return formatDate(this.getDataValue('createdAt'))
      }
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Comment',
  });
  return Comment;
};