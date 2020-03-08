export default {
  env: process.env.NODE_ENV,
  get isProd() {
    return this.env === 'production'
  },
  isBrowser: typeof window === 'object',
  baseUrl: process.env.BACKEND_URL || 'http://localhost:4000/api',
}
