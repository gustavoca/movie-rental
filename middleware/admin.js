module.exports = (req, res, next) => {
  if (!req.user.isAdmin) return res.status(400).send('Access Denied.');
  return next();
}
