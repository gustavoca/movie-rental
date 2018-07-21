module.exports = ({ customerRepository, Customer }) => async (id) => {
  const result = await customerRepository.delete(id);
  if(!result) throw new Error(`Could not find genre with id ${id}`);
  return new Customer(result);
}
