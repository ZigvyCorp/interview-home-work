import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _comments from  "./comments.js";
import _posts from  "./posts.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const comments = _comments.init(sequelize, DataTypes);
  const posts = _posts.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  comments.belongsTo(posts, { as: "post_post", foreignKey: "post"});
  posts.hasMany(comments, { as: "comments", foreignKey: "post"});
  comments.belongsTo(users, { as: "owner_user", foreignKey: "owner"});
  users.hasMany(comments, { as: "comments", foreignKey: "owner"});
  posts.belongsTo(users, { as: "owner_user", foreignKey: "owner"});
  users.hasMany(posts, { as: "posts", foreignKey: "owner"});

  return {
    comments,
    posts,
    users,
  };
}
