import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Comments from  "./Comments.js";
import _Posts from  "./Posts.js";
import _Users from  "./Users.js";

export default function initModels(sequelize) {
  const Comments = _Comments.init(sequelize, DataTypes);
  const Posts = _Posts.init(sequelize, DataTypes);
  const Users = _Users.init(sequelize, DataTypes);

  Comments.belongsTo(Posts, { as: "post", foreignKey: "postId"});
  Posts.hasMany(Comments, { as: "Comments", foreignKey: "postId"});
  Posts.belongsTo(Users, { as: "user", foreignKey: "userId"});
  Users.hasMany(Posts, { as: "Posts", foreignKey: "userId"});

  return {
    Comments,
    Posts,
    Users,
  };
}
