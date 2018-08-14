const express = require('express');
const router  = express.Router();
const authenticateUser = require('../app/components/users/actions').authenticateUser;

router.post('/', async (req, res) => {
  const genre = await authenticateUser(req.body);
  return res.send(genre);
});

module.exports = router;
