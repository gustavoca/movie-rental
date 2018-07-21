module.exports = ({ customerRepository, Customer, customerValidator }) => async (id, updatedCustomer) => {
  customerValidator.validate(updatedCustomer);
  updatedCustomer = new Customer(updatedCustomer);
  const updateResult = await customerRepository.update(id, updatedCustomer);
  if (!updateResult) throw new Error(`Could not find genre with id ${id}`);
  return new Customer(updateResult);
}
