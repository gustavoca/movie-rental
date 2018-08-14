module.exports = ({
  rentalRepository, customerRepository, movieRepository, Rental, Movie, Customer, rentalValidator }) =>
  async ({ customerId, movieId }) => {
    rentalValidator.validate({ customerId, movieId });
    const result = await Promise.all([
      customerRepository.findById(customerId),
      movieRepository.findById(movieId)
    ])
    if(!result[0]) throw new Error(`Could not find Customer with id ${customerId}`);
    if(!result[1]) throw new Error(`Could no find Movie with id ${movieId}`);
    const customer = new Customer(result[0]);
    const movie = new Movie(result[1]);
    let newRental = new Rental({ customer, movie });
    if (movie.numberInStock <= 0) throw new Error(`Movie Not in Stock`);
    newRental = await rentalRepository.save(newRental);
    newRental = new Rental(newRental);
    movie.numberInStock--;
    movieRepository.update(movieId, movie);
    return newRental;
  }
