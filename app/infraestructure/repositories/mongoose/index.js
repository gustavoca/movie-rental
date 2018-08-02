const mongoose = require('mongoose');
const schemas  = require('./schemas');
mongoose.connect('mongodb://localhost/movie-rental');

module.exports = {
  genreDb   : require('./genre.mongo')({ mongoose, schemas }),
  customerDb: require('./customer.mongo')({ mongoose, schemas }),
  movieDb   : require('./movie.mongo')({ mongoose, schemas }),
  rentalDb  : require('./rental.mongo')({ mongoose, schemas }),
  userDb    : require('./user.mongo')({ mongoose, schemas })
}
