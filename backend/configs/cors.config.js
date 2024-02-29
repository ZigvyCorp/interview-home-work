const cors = require("cors");
const mongoose = require("mongoose");

const whitelist = [process.env.DOMAIN_REMOTE, process.env.DOMAIN_LOCAL];

const corsOptions = {
  origin: (origin, cd) => {
    const originIsWhitelisted = whitelist.includes(origin);
    cd(null, originIsWhitelisted);
  },
  credentials: true,
};

module.exports = (app) => app.use(cors(corsOptions));
