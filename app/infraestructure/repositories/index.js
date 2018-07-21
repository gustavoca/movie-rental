const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movie-rental');

module.exports = {
  genreRepository   : require('./genre.mongo')({ mongoose }),
  customerRepository: require('./customer.mongo')({ mongoose })
}
