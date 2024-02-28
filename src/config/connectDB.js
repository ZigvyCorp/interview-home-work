const {Pool} = require('pg')
require("dotenv").config();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Test_Zigvy',
    password: '123123',
    port: 5432
})

module.exports = { pool }