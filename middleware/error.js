module.exports = (err, req, res, next) => {
  console.log(err);
  return res.status(400).send(err.message);
};
