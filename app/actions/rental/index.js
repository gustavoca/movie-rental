const {
  rentalRepository,
  movieRepository,
  customerRepository
} = require('../../infraestructure/repositories');
const Rental           = require('../../model/rental/rental.model');
const Movie            = require('../../model/movie/movie.model');
const Customer         = require('../../model/customer/customer.model');
const rentalValidator  = require('../../model/rental/rental.validator');

module.exports = {
  createRental: require('./create.rental')({
    rentalRepository, movieRepository, customerRepository, Rental, Movie, Customer, rentalValidator }),
  readRental: require('./read.rental')({ rentalRepository, Rental })
  // updateRequire('./update.rental')({ rentalRepository, Rental, rentalValidator }),
  // deleteRental: require('./delete.rental')({ rentalRepository, Rental })
}
