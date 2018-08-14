const authMiddleware = require('../middleware/authorization');
const adminMiddleware = require('../middleware/admin');
const express = require('express');
const router  = express.Router();
const {
  createGenre,
  readGenre,
  updateGenre,
  deleteGenre } = require('../app/actions/genre');

router.post('/', [authMiddleware, adminMiddleware], async (req, res) => {
  const genre = await createGenre(req.body);
  return res.send(genre);
})

router.get('/', async (req, res) => {
  const genres = await readGenre();
  res.send(genres);
})

router.put('/:id', async (req, res) => {
  const genre = await updateGenre(req.params.id, req.body);
  return res.send(genre);
})

router.delete('/:id', async (req, res) => {
  const deletedGenre = await deleteGenre(req.params.id);
  return res.send(deletedGenre);
})

module.exports = router;
