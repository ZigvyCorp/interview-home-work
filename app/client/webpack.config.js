const Dotenv = require("dotenv-webpack");

module.exports = {
  plugins: [
    new Dotenv({
      path: `./.env`,
      systemvars: true, //Set to true if you would rather load all system variables as well (useful for CI purposes)
    }),
  ],
};
