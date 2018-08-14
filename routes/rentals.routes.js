const express = require('express');
const router  = express.Router();
const {
  createRental,
  readRental } = require('../app/actions/rental');

router.post('/', async (req, res) => {
  const genre = await createRental(req.body);
  return res.send(genre);
})

router.get('/', async (req, res) => {
  const genres = await readRental();
  res.send(genres);
})

// router.put('/:id', async (req, res) => {
//   try {
//     const genre = await updateMovie(req.params.id, req.body);
//     return res.send(genre);
//   }
//   catch(e) {
//     console.log(e);
//     return res.status(400).send(e.message);
//   }
// })
//
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedMovie = await deleteMovie(req.params.id);
//     return res.send(deletedMovie);
//   }
//   catch(e) {
//     console.log(e);
//     return res.status(400).send(e.message);
//   }
// })

module.exports = router;
