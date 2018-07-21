const express = require('express');
const router  = express.Router();
const {
  createGenre,
  readGenre,
  updateGenre,
  deleteGenre } = require('../app/components/genres/actions');

//genres endpoints----------------------------
router.post('/', async (req, res) => {
  try {
    const genre = await createGenre(req.body);
    return res.send(genre);
  }
  catch(e) {
    console.log(e);
    return res.status(400).send(e.message);
  }
})

router.get('/', async (req, res) => {
  try {
    const genres = await readGenre();
    res.send(genres);
  }
  catch(e) {
    console.log(e);
    return res.status(400).send(e.message);
  }
})

router.put('/:id', async (req, res) => {
  try {
    const genre = await updateGenre(req.params.id, req.body);
    return res.send(genre);
  }
  catch(e) {
    console.log(e);
    return res.status(400).send(e.message);
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const deletedGenre = await deleteGenre(req.params.id);
    return res.send(deletedGenre);
  }
  catch(e) {
    console.log(e);
    return res.status(400).send(e.message);
  }
})
//genres endpoints----------------------------

module.exports = router;
