'use strict';
const {
  Model
} = require('sequelize');
const {formatDate} = require('../utils/formatDate');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {foreignKey: 'userId'})
      Post.hasMany(models.Comment, {foreignKey: 'postId'})
    }
  }
  Post.init({
    postId: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    tags: DataTypes.ARRAY(DataTypes.STRING),
    userId: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      get: function() {
        return formatDate(this.getDataValue('createdAt'))
      }
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Post',
  });
  return Post;
};