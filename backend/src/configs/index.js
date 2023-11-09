const config = {
    dev: {
        app: {
            port: process.env.DEV_APP_PORT || 3000,
        },
        db: {
            username: process.env.DEV_DB_USERNAME || "root",
            host: process.env.DEV_DB_HOST || "localhost",
            port: process.env.DEV_DB_PORT || 5432,
            name: process.env.DEV_DB_NAME || "zigvy_test",
            password: process.env.DEV_DB_PASSWORD || null,
        },
    },
    pro: {
        app: {
            port: process.env.PRO_APP_PORT || 3052,
        },
        db: {
            username: process.env.DEV_DB_USERNAME || "root",
            host: process.env.PRO_DB_HOST || "localhost",
            port: process.env.PRO_DB_PORT || 5432,
            name: process.env.PRO_DB_NAME || "test",
            password: process.env.DEV_DB_PASSWORD || null,
        },
    },
};
const env = process.env.NODE_ENV || "dev";

module.exports = config[env];
