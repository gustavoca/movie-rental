const express = require('express');
const router  = express.Router();
const createUser = require('../app/components/users/actions').createUser;

router.post('/', async (req, res) => {
  const genre = await createUser(req.body);
  return res.send(genre);
});

module.exports = router;
