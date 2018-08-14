const jwt = require('jsonwebtoken');

const create = ({ privateKey }) => ({ id, isAdmin }) => {
  return jwt.sign({ id: id, isAdmin: isAdmin }, privateKey);
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
