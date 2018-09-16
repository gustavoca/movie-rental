require('express-async-errors');
const express = require('express');
const log     = require('./app/lib/logger');
const config  = require('config');
const app     = express();
require('./startup/routes')(app);

process.on('unhandledRejection', (ex) => {
  log.error(ex.message, ex);
  process.exit(1);
});

if (!config.get('jwtPrivateKey')) {
  log.error('FATAL: jwtPrivateKey is not defined');
  process.exit(1);
}

const port = process.env.PORT || 3000;
app.listen(port);
log.info(`Listening on port ${port}`);
