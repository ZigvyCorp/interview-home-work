const { DataTypes } = require('sequelize')

module.exports = (sequenlize) => {
  const Comments = sequenlize.define('comments', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    owner_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    post_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, { paranoid: true })

  Comments.associate = (Models) => {
    Comments.belongsTo(Models.Users, { foreignKey: 'owner_id' })
    Comments.belongsTo(Models.Posts, { foreignKey: 'post_id' })
  }

  return { name: 'Comments', model: Comments }
}