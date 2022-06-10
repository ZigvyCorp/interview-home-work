// TODO config mongodb
const dotenv = require('dotenv');
// * config dotenv .env
dotenv.config();
const MONGO_OPTIONS = {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: true,
    retryWrites: true,
    useFindAndModify: true
};


const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_HOST = process.env.MONGO_HOST || `mongo-db.luqhv.mongodb.net`;
const MONGO_HOST_OP = process.env.MONGO_OPTIONS || ''

const MONGO = {
    host: MONGO_HOST,
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_USERNAME}?${MONGO_HOST_OP}`
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 5030;
const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
const config = {
    mongo: MONGO,
    server: SERVER
};

module.exports = config;