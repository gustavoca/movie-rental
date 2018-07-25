const express = require('express');
const router  = express.Router();
const {
  createMovie,
  readMovie,
  updateMovie,
  deleteMovie } = require('../app/components/movies/actions');

router.post('/', async (req, res) => {
  try {
    const genre = await createMovie(req.body);
    return res.send(genre);
  }
  catch(e) {
    console.log(e);
    return res.status(400).send(e.message);
  }
})

router.get('/', async (req, res) => {
  try {
    const genres = await readMovie();
    res.send(genres);
  }
  catch(e) {
    console.log(e);
    return res.status(400).send(e.message);
  }
})

router.put('/:id', async (req, res) => {
  try {
    const genre = await updateMovie(req.params.id, req.body);
    return res.send(genre);
  }
  catch(e) {
    console.log(e);
    return res.status(400).send(e.message);
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const deletedMovie = await deleteMovie(req.params.id);
    return res.send(deletedMovie);
  }
  catch(e) {
    console.log(e);
    return res.status(400).send(e.message);
  }
})

module.exports = router;
