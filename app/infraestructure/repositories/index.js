const persistence = require('./mongoose');

module.exports = {
  genreRepository   : persistence.genreDb,
  customerRepository: persistence.customerDb,
  movieRepository   : persistence.movieDb,
  rentalRepository  : persistence.rentalDb
}
