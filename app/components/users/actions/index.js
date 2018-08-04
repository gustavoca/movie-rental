const { encryptPassword,
  comparePassword }   = require('../services').passwordService;
const userRepository  = require('../../../infraestructure/repositories').userRepository;
const { createToken } = require('../services').tokenService;
const User            = require('../user.model');
const userValidator   = require('../user.validator');
const userAuthenticationValidator = require('../user-authentication.validator');

module.exports = {
  createUser      : require('./create.user')({ userRepository, User, userValidator, encryptPassword }),
  authenticateUser: require('./authenticate.user')({
    userRepository, User, userAuthenticationValidator, comparePassword, createToken })
}
