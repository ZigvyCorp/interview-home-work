const { Pool } = require('pg');

const pool = new Pool({
  user: 'dev',
  host: 'localhost',
  database: 'interview',
  password: 'password',
  port: 5435, 
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
