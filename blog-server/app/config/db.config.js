const { Pool } = require('pg')

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 1234,
  password: "password",
  database: "zigvy_blog"
})

module.exports = pool
