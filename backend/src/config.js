export default {
  appName: process.env.APP_NAME,
  env: process.env.NODE_ENV,
  get isProd() {
    return this.env === 'production'
  },
  host: process.env.SERVER_HOST,
  port: process.env.SERVER_PORT,
  get serverAddress() {
    return `http://${this.host}:${this.port}`
  },
  database: {
    get url() {
      return `${this.client}://${this.host}:${this.port}/${this.name}`
    },
    client: process.env.DB_CLIENT || 'mongodb',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || 'test',
  },
  log: {
    dir: process.env.LOG_DIR || 'logs',
    level: process.env.LOG_LEVEL || 'info',
  },
  cors: {
    allowedOrigins: process.env.CORS_ALLOWED_ORIGINS || '*',
  },
  auth: {
    jwt: {
      scheme: process.env.JWT_AUTH_SCHEME || 'bearer',
      secret: process.env.JWT_SECRET || 'testsecret',
      issuer: process.env.JWT_ISSUER || 'testbackend',
      audience: process.env.JWT_AUDIENCE || 'testfrontend',
      algorithm: process.env.JWT_ALGORITHM || 'HS256',
      expiresIn: process.env.JWT_EXPIRES_IN || 60 * 60 * 24 * 30, // 30 days
    },
  },
  joiValidationOptions: { allowUnknown: true, skipFunctions: true, abortEarly: false },
}
