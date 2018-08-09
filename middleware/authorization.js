const { verifyToken } = require('../app/components/users/services').tokenService;
module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied no token provided.');
  const user = verifyToken({ token });
  if (user) {
    req.user = user;
    return next();
  }
  return res.status(400).send('Invalid Token');
}
