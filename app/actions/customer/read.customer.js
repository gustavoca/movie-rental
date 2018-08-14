module.exports = ({ customerRepository, Customer }) =>
  async () => {
    const result = await customerRepository.all();
    return result.map(genre => new Customer(genre));
  }
