const jwt = require('jsonwebtoken');

const create = ({ privateKey }) => ({ id }) => {
  return jwt.sign({ id: id }, privateKey);
}

module.exports = ({ privateKey }) => {
  return {
    createToken: create({ privateKey })
  }
}
