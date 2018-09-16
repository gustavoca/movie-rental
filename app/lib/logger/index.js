const winston = require('winston');

const { combine, timestamp, printf } = winston.format;

const myFormat = printf(info => {
  const format = `${info.timestamp}`;
  if (info instanceof Error) {
    return `${format} ${info.stack}`
  }
  return `${format} ${info.level}: ${info.message}`;
});

const logger = winston.createLogger({
  format: combine(
    timestamp(),
    myFormat
  ),
  level     : 'debug',
  transports: [new winston.transports.Console()]
})

process.on('uncaughtException', (ex) => {
  logger.error(ex);
  process.exit(1);
})

process.on('unhandledRejection', (ex) => {
  throw ex;
});

module.exports = logger;
