const sequelize = require('../configs/connect');
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

User.hasMany(Post,{as: 'Posts',foreignKey:'owner'});
User.hasMany(Comment,{as: 'Comments',foreignKey:'owner'});

Post.belongsTo(User,{as: 'Owner',foreignKey:'owner'});
Post.hasMany(Comment,{as: 'Comments',foreignKey:'post'});

Comment.belongsTo(User,{as: 'Owner',foreignKey:'owner'});
Comment.belongsTo(Post,{as: 'Post',foreignKey:'post'});

async function initModels() {
  await sequelize.sync(); 
}



module.exports = {
  initModels
};