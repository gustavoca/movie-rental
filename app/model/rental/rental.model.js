class Rental {
  constructor({ id, customer, movie, dateOut, dateReturned, rentalFee }) {
    this.id            = id;
    this.customer      = this.filterCustomer(customer);
    this.movie         = this.filterRental(movie);
    this.dateOut       = dateOut ? dateOut : new Date();
    this.dateReturned  = dateReturned;
    this.rentalFee     = rentalFee;
  }

  filterCustomer(customer) {
    const customerObject = {};
    customerObject.id     = customer.id;
    customerObject.name   = customer.name;
    customerObject.phone  = customer.phone;
    return customerObject;
  }

  filterRental(movie) {
    const movieObject = {};
    movieObject.id              = movie.id;
    movieObject.title           = movie.title;
    movieObject.dailyRentalRate = movie.dailyRentalRate;
    return movieObject;
  }
}

module.exports = Rental;
