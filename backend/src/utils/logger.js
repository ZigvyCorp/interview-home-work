import fs from 'fs'
import winston, { format } from 'winston'
import 'winston-daily-rotate-file'

import config from '../config'

if (!fs.existsSync(config.log.dir)) {
  fs.mkdirSync(config.log.dir)
}

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: format.combine(format.colorize(), format.simple()),
      level: 'info',
    }),
    new winston.transports.DailyRotateFile({
      format: format.combine(format.timestamp(), format.json()),
      maxFiles: '14d',
      level: config.log.level,
      dirname: config.log.dir,
      datePattern: 'YYYY-MM-DD',
      filename: '%DATE%-debug.log',
    }),
  ],
})

export const logStream = {
  write(message) {
    logger.info(message.toString())
  },
}

export default logger
