module.exports = ({ movieRepository, Movie }) => async () => {
  const result = await movieRepository.all();
  return result.map(movie => new Movie(movie));
}
