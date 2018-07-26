module.exports = ({ rentalRepository, Rental }) => async () => {
  const result = await rentalRepository.all();
  return result.map(data => new Rental(data));
}
