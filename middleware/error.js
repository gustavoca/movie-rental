const log = require('../app/lib/logger');

module.exports = (err, req, res, next) => {
  log.error(err);
  return res.status(400).send(err.message);
};
