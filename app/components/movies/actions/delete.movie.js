module.exports = ({ movieRepository, Movie }) => async (id) => {
  const result = await movieRepository.delete(id);
  if(!result) throw new Error(`Could not find genre with id ${id}`);
  return new Movie(result);
}
