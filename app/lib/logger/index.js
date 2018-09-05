const winston = require('winston');

const { combine, timestamp, printf } = winston.format;

const myFormat = printf(info => {
  let format = `${info.timestamp}`;
  if (info instanceof Error) {
    return `${format} ${info.stack}`
  }
  return `${format} ${info.level}: ${info.message}`;
});

const replaceErrors = (value) => {
  const error = {};

  Object.getOwnPropertyNames(value).forEach((valuesKey) => {
    error[valuesKey] = value[valuesKey];
  });
  return error;
}

const logger = winston.createLogger({
  format: combine(
    timestamp(),
    // winston.format.json({ replacer: replaceErrors })
    myFormat
  ),
  level     : 'debug',
  transports: [new winston.transports.Console()]
})

module.exports = logger;
