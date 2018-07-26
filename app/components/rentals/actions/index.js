const {
  rentalRepository,
  movieRepository,
  customerRepository
} = require('../../../infraestructure/repositories');
const Rental           = require('../rental.model');
const Movie            = require('../../movies/movie.model');
const Customer         = require('../../customers/customer.model');
const rentalValidator  = require('../rental.validator');

module.exports = {
  createRental: require('./create.rental')({
    rentalRepository, movieRepository, customerRepository, Rental, Movie, Customer, rentalValidator }),
  readRental: require('./read.rental')({ rentalRepository, Rental })
  // updateRequire('./update.rental')({ rentalRepository, Rental, rentalValidator }),
  // deleteRental: require('./delete.rental')({ rentalRepository, Rental })
}
