const { encryptPassword,
  comparePassword }               = require('../../model/user/services').passwordService;
const userRepository              = require('../../infraestructure/repositories').userRepository;
const { createToken }             = require('../../model/user/services').tokenService;
const User                        = require('../../model/user/user.model');
const userValidator               = require('../../model/user/user.validator');
const userAuthenticationValidator = require('../../model/user/user-authentication.validator');

module.exports = {
  createUser      : require('./create.user')({ userRepository, User, userValidator, encryptPassword }),
  authenticateUser: require('./authenticate.user')({
    userRepository, User, userAuthenticationValidator, comparePassword, createToken })
}
