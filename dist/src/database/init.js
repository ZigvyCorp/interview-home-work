"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
const loadEnv = () => {
    let envPath;
    switch (process.env.NODE_ENV) {
        case 'development':
            envPath = './.env.development';
            break;
        default:
            envPath = './.env';
            break;
    }
    (0, dotenv_1.config)({
        path: envPath,
    });
};
loadEnv();
const defaultDB = 'postgres';
const databaseNeedToCreate = process.env.DB_DATABASE_NAME;
let connection = null;
const createDatabaseIfNotExist = async (databaseName) => {
    connection = await (0, typeorm_1.createConnection)({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: defaultDB,
    });
    const entityManager = (0, typeorm_1.getManager)();
    const databasesQueryResult = await entityManager.query(`SELECT 0 FROM pg_database WHERE datname = '${databaseName}';`);
    if (databasesQueryResult.length > 0) {
        console.info(`Database ${databaseName} is existed!`);
    }
    else {
        console.info(`Database ${databaseName} is not exist. Creating database ...`);
        await entityManager.query(`CREATE DATABASE ${databaseName};`);
        console.log(`Database ${databaseName} is created!`);
    }
};
createDatabaseIfNotExist(databaseNeedToCreate).then(() => connection.close());
//# sourceMappingURL=init.js.map