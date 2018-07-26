module.exports = ({ rentalRepository, customerRepository, movieRepository, Movie, movieValidator }) =>
  async (id, { customerId, movieId, dateOut, dateReturned, rentalFee }) => {
    movieValidator.validate({ customerId, movieId, dateOut, dateReturned, rentalFee });
    const result = await Promise.all([
      customerRepository.findById(customerId),
      movieRepository.findyId(movieId)
    ])
    if(!result[0]) throw new Error(`Could not find Customer with id ${customerId}`);
    if(!result[1]) throw new Error(`Could no find Movie with id ${movieId}`);
    const customer = result[0];
    const movie = result[1];
    const updatedMovie = new Movie({ customer, movie, dateOut, dateReturned, rentalFee });
    const updateResult = await rentalRepository.update(id, updatedMovie);
    if (!updateResult) throw new Error(`Could not update rental with id ${id}`);
    return new Movie(updateResult);
  }
