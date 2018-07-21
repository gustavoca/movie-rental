module.exports = ({ genreRepository, Genre, genreValidator }) => async ({ name }) => {
  genreValidator.validate({ name });
  let newGenre = new Genre({ name });
  newGenre = await genreRepository.save(newGenre);
  newGenre = new Genre(newGenre);
  return newGenre;
}
