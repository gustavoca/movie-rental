module.exports = ({ rentalRepository, Movie }) => async (id) => {
  const result = await rentalRepository.delete(id);
  if(!result) throw new Error(`Could not find rental with id ${id}`);
  return new Movie(result);
}
