module.exports = ({ genreRepository, Genre }) => async (id) => {
  const result = await genreRepository.delete(id);
  if(!result) throw new Error(`Could not find genre with id ${id}`);
  return new Genre(result);
}
