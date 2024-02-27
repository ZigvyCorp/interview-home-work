"use strict";

const production = {
  app: {
    port: process.env.PRO_APP_PORT,
  },
};
const development = {
  app: {
    port: process.env.DEV_APP_PORT,
  },
};
const config = {
  production,
  development,
};
const env = process.env.NODE_ENV || "development";
module.exports = config[env];