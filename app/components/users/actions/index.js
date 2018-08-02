const userRepository = require('../../../infraestructure/repositories').userRepository;
const User           = require('../user.model');
const userValidator  = require('../user.validator');

module.exports = {
  createUser: require('./create.user')({ userRepository, User, userValidator })
}
