import winston from 'winston';

const { combine, timestamp, colorize, printf } = winston.format;

const customPrintf = printf((info) => {
  let msg = `[${info.timestamp}] [${process.env.NODE_ENV}] ${info.level}: ${info.message}`;
  if (info.stack) {
    msg += `\n${info.stack}`;
  }
  return msg;
});

export const logger = winston.createLogger({
  level: 'http',
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: 'DD-MM-YYYY hh:mm:ss.SSS A'
    }),
    customPrintf
  ),
  transports: [new winston.transports.Console()]
});
