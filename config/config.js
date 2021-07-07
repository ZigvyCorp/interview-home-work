require('dotenv').config();
let _config = module.exports = {};

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
};

_config.JWT_SECRET = process.env.JWT_SECRET;
_config.JWT_EXPIRES = process.env.JWT_EXPIRES;
_config.PAGINATE_LIMIT = 20;
_config.MAX_PAGINATE_LIMIT = 300;

// MONGODB
_config.MONGODB = {
  getConfig: () => {
    return `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`;
  },
};

