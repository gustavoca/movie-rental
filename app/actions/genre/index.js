const genreRepository = require('../../infraestructure/repositories').genreRepository;
const Genre           = require('../../model/genre/genre.model');
const genreValidator  = require('../../model/genre/genre.validator');

module.exports = {
  createGenre: require('./create.genre')({ genreRepository, Genre, genreValidator }),
  readGenre  : require('./read.genre')({ genreRepository, Genre }),
  updateGenre: require('./update.genre')({ genreRepository, Genre, genreValidator }),
  deleteGenre: require('./delete.genre')({ genreRepository, Genre })
}
