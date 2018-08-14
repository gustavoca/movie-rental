const passwordService = require('./password.service');
const tokenService    = require('./token.service');
const config          = require('config');

module.exports = {
  passwordService: passwordService,
  tokenService   : tokenService({ privateKey: config.get('jwtPrivateKey') })
}
