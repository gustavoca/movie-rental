const express = require('express');
const router  = express.Router();
const authenticateUser = require('../app/components/users/actions').authenticateUser;

router.post('/', async (req, res) => {
  try {
    const genre = await authenticateUser(req.body);
    return res.send(genre);
  }
  catch(e) {
    console.log(e);
    return res.status(400).send(e.message);
  }
});

module.exports = router;
