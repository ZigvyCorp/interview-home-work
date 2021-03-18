const { config } = require('dotenv')

config();

module.exports.getServerConfig = () => ({
  port: Number.parseInt(process.env.PORT || 3000)
})

module.exports.getMySQLConfig = () => ({
  dialect: 'mysql',
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  port: Number.parseInt(process.env.MYSQL_PORT)
})

module.exports.getEnvironment = () => process.env.NODE_ENV