const express = require('express');
const router  = express.Router();
const {
  createCustomer,
  readCustomer,
  updateCustomer,
  deleteCustomer } = require('../app/components/customers/actions');

router.post('/', async (req, res) => {
  try {
    const genre = await createCustomer(req.body);
    return res.send(genre);
  }
  catch(e) {
    console.log(e);
    return res.status(400).send(e.message);
  }
})

router.get('/', async (req, res) => {
  try {
    const genres = await readCustomer();
    res.send(genres);
  }
  catch(e) {
    console.log(e);
    return res.status(400).send(e.message);
  }
})

router.put('/:id', async (req, res) => {
  try {
    const genre = await updateCustomer(req.params.id, req.body);
    return res.send(genre);
  }
  catch(e) {
    console.log(e);
    return res.status(400).send(e.message);
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const deletedCustomer = await deleteCustomer(req.params.id);
    return res.send(deletedCustomer);
  }
  catch(e) {
    console.log(e);
    return res.status(400).send(e.message);
  }
})

module.exports = router;
