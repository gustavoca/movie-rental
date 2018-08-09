const jwt = require('jsonwebtoken');

const create = ({ privateKey }) => ({ id }) => {
  return jwt.sign({ id: id }, privateKey);
}

const verify = ({ privateKey }) => ({ token }) => {
  try {
    return jwt.verify(token, privateKey);
  }
  catch(e) {
    return;
  }
}

module.exports = ({ privateKey }) => {
  return {
    createToken: create({ privateKey }),
    verifyToken: verify({ privateKey })
  }
}
