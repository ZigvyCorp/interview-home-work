"use strict";

const production = {
  app: {
    port: process.env.PRO_APP_PORT,
  },
  db: {
    stringConnect: `${process.env.PRO_DB_URI}/${process.env.PRO_DB_NAME}`,
  },
};
const development = {
  app: {
    port: process.env.DEV_APP_PORT,
  },
  db: {
    stringConnect: `${process.env.DEV_DB_URI}/${process.env.DEV_DB_NAME}`,
  },
};
const config = {
  production,
  development,
};
const env = process.env.NODE_ENV || "development";
module.exports = config[env];