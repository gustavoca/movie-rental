module.exports = ({ genreRepository, Genre }) => async () => {
  const result = await genreRepository.all();
  return result.map(genre => new Genre(genre));
}
