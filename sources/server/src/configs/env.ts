import dotenv from 'dotenv';
import path from 'path';

import pkg from '../../package.json';
import { getOsEnv, normalizePort, toBool, toNumber } from '../libs/os';

dotenv.config({ path: path.join(process.cwd(), `.env${process.env.NODE_ENV === 'test' ? '.test' : ''}`) });

/**
 * Environment variables
 */

export const env = {
    node: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
    isDevelopment: process.env.NODE_ENV === 'development',

    app: {
        name: getOsEnv('APP_NAME'),
        version: pkg.version,
        description: pkg.description,
        host: getOsEnv('APP_HOST'),
        schema: getOsEnv('APP_SCHEMA'),
        routePrefix: getOsEnv('APP_ROUTE_PREFIX'),
        port: normalizePort(process.env.PORT || getOsEnv('APP_PORT')),
        banner: toBool(getOsEnv('APP_BANNER')),
    },
    database: {
        connection: getOsEnv('DB_CONNECTION'),
    },
    log: {
        level: getOsEnv('LOG_LEVEL'),
        output: getOsEnv('LOG_OUTPUT'),
    },
    monitor: {
        enabled: toBool(getOsEnv('MONITOR_ENABLED')),
        route: getOsEnv('MONITOR_ROUTE'),
        username: getOsEnv('MONITOR_USERNAME'),
        password: getOsEnv('MONITOR_PASSWORD'),
    },
    passport: {
        jwtToken: getOsEnv('PASSPORT_JWT'),
        jwtAccessExpired: toNumber(getOsEnv('PASSPORT_JWT_ACCESS_EXPIRED')),
        jwtRefreshExpired: toNumber(getOsEnv('PASSPORT_JWT_REFRESH_EXPIRED')),
    },
    swagger: {
        enabled: toBool(getOsEnv('SWAGGER_ENABLED')),
        route: getOsEnv('SWAGGER_ROUTE'),
        username: getOsEnv('SWAGGER_USERNAME'),
        password: getOsEnv('SWAGGER_PASSWORD'),
    },
};
