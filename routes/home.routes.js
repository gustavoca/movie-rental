const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.write('Home');
});

module.exports = router;
