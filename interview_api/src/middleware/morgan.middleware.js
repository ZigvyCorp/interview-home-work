import morgan from 'morgan';
import { logger } from '../utils/logger.js';

morgan.format('custom', `[:remote-addr] :method :url :status :res[content-length] - :response-time ms`);

const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};
export const morganMiddleware = morgan('custom', {
  stream: {
    // Configure Morgan to use our custom logger with the http severity
    write: (message) => {
      const statusCode = parseInt(message.split(' ')[3]);
      const level = statusCode >= 400 ? 'error' : 'info';
      logger.log(level, message.trim());
    }
  },
  // Optionally skip logging HTTP 200 responses in production
  skip: skip
});
