const { Sequelize } = require('sequelize')
const { getMySQLConfig } = require('../config')

module.exports = () => {
  const config = getMySQLConfig()
  const  sequelize = new Sequelize({
    dialect: config.dialect,
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
    // port: config.port
  })
  return sequelize;
}