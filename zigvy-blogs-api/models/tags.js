const { DataTypes } = require('sequelize')

module.exports = (sequenlize) => {
  const Tags = sequenlize.define('tags', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    color: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, { paranoid: true })

  Tags.associate = (Models) => {
    Tags.belongsToMany(Models.Posts, { through: 'posts_tags', foreignKey: 'tag_id' })
  }

  return { name: 'Tags', model: Tags }
}