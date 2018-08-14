const express = require('express');
const router  = express.Router();
const {
  createMovie,
  readMovie,
  updateMovie,
  deleteMovie } = require('../app/actions/movie');

router.post('/', async (req, res) => {
  const genre = await createMovie(req.body);
  return res.send(genre);
})

router.get('/', async (req, res) => {
  const genres = await readMovie();
  res.send(genres);
})

router.put('/:id', async (req, res) => {
  const genre = await updateMovie(req.params.id, req.body);
  return res.send(genre);
})

router.delete('/:id', async (req, res) => {
  const deletedMovie = await deleteMovie(req.params.id);
  return res.send(deletedMovie);
})

module.exports = router;
