const { DataTypes } = require('sequelize')

module.exports = (sequenlize) => {
  const Posts = sequenlize.define('posts', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    owner_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, { paranoid: true })

  Posts.associate = (Models) => {
    Posts.belongsTo(Models.Users, { foreignKey: 'owner_id' })
    Posts.belongsToMany(Models.Tags, { through: 'posts_tags', foreignKey: 'post_id' })
    Posts.hasMany(Models.Comments, { foreignKey: 'post_id' })
  }

  return { name: 'Posts', model: Posts }
}