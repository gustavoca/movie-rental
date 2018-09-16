require('express-async-errors');
require('./startup/validation')();
const express = require('express');
const log     = require('./app/lib/logger');
const app     = express();
require('./startup/routes')(app);

const port = process.env.PORT || 3000;
app.listen(port);
log.info(`Listening on port ${port}`);
