const express = require('express');
const router  = express.Router();
const createUser = require('../app/components/users/actions').createUser;

router.post('/', async (req, res) => {
  try {
    const genre = await createUser(req.body);
    return res.send(genre);
  }
  catch(e) {
    console.log(e);
    return res.status(400).send(e.message);
  }
});

module.exports = router;
