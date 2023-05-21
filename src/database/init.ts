import { config } from 'dotenv';
import { createConnection as createPostgresConnection, getManager, Connection } from 'typeorm';

// Load configuration
const loadEnv = () => {
    let envPath: string;

    switch (process.env.NODE_ENV) {

        case 'development':
            envPath = './.env.development';
            break;
        default:
            envPath = './.env';
            break;
    }

    config({
        path: envPath,
    });
};

loadEnv();

// Constants
const defaultDB = 'postgres';
const databaseNeedToCreate = process.env.DB_DATABASE_NAME;
/**
 * MAIN
 */

let connection: Connection = null;

const createDatabaseIfNotExist = async (databaseName: string) => {
    // Establish the connection
    connection = await createPostgresConnection({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: defaultDB,
    });

    // Get all existed databases
    const entityManager = getManager();
    const databasesQueryResult: any[] = await entityManager.query(
        `SELECT 0 FROM pg_database WHERE datname = '${databaseName}';`,
    );
    if (databasesQueryResult.length > 0) {
        console.info(`Database ${databaseName} is existed!`);
    } else {
        console.info(`Database ${databaseName} is not exist. Creating database ...`);
        await entityManager.query(`CREATE DATABASE ${databaseName};`);
        console.log(`Database ${databaseName} is created!`);
    }
};

createDatabaseIfNotExist(databaseNeedToCreate).then(() => connection.close());