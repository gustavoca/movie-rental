const express = require('express');
const router  = express.Router();
const {
  createCustomer,
  readCustomer,
  updateCustomer,
  deleteCustomer } = require('../app/actions/customer');

router.post('/', async (req, res) => {
  const genre = await createCustomer(req.body);
  return res.send(genre);
})

router.get('/', async (req, res) => {
  const genres = await readCustomer();
  res.send(genres);
})

router.put('/:id', async (req, res) => {
  const genre = await updateCustomer(req.params.id, req.body);
  return res.send(genre);
})

router.delete('/:id', async (req, res) => {
  const deletedCustomer = await deleteCustomer(req.params.id);
  return res.send(deletedCustomer);
})

module.exports = router;
