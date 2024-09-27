const sequelize = require('../configs/connect');
const UserModel = require('./user');
const PostModel = require('./post');
const CommentModel = require('./comment');
const { DataTypes } = require('sequelize').DataTypes;

const User = new UserModel(sequelize);
const Post = new PostModel(sequelize);
const Comment = new CommentModel(sequelize);

UserModel.hasMany(PostModel,{as: 'Posts',foreignKey:'owner'});

PostModel.belongsTo(UserModel,{as: 'Owner',foreignKey:'owner'});

UserModel.hasMany(CommentModel,{as: 'Comments',foreignKey:'owner'});

CommentModel.belongsTo(UserModel,{as: 'Owner',foreignKey:'owner'});

PostModel.hasMany(CommentModel,{as: 'Comments',foreignKey:'post'});

CommentModel.belongsTo(PostModel,{as: 'Post',foreignKey:'post'});

async function initModels() {
  await sequelize.sync(); 
}



module.exports = {
  User,
  Post,
  Comment,
  initModels
};