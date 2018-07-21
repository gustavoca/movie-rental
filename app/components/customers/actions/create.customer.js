module.exports = ({ customerRepository, Customer, customerValidator }) => async ({ name, isGold, phone }) => {
  customerValidator.validate({ name, isGold, phone });
  let newCustomer = new Customer({ name, isGold, phone });
  newCustomer = await customerRepository.save(newCustomer);
  newCustomer = new Customer(newCustomer);
  return newCustomer;
}
