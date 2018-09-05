const log = require('../app/lib/logger');

module.exports = (err, req, res, next) => {
  // console.log(err);
  log.error(err);
  return res.status(400).send(err.message);
};
