const { DataTypes } = require('sequelize')

module.exports = (sequenlize) => {
  const Users = sequenlize.define('users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
  }, { paranoid: true })

  Users.associate = (Models) => {
    Users.hasMany(Models.Posts, { foreignKey: 'owner_id' })
    Users.hasMany(Models.Comments, { foreignKey: 'owner_id' })
  }

  return { name: 'Users', model: Users }
}