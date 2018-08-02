const userRepository  = require('../../../infraestructure/repositories').userRepository;
const encryptPassword = require('../services').encryptPassword;
const User            = require('../user.model');
const userValidator   = require('../user.validator');

module.exports = {
  createUser: require('./create.user')({ userRepository, User, userValidator, encryptPassword })
}
