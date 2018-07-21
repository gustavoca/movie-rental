const genreRepository = require('../../../infraestructure/repositories').genreRepository;
const Genre           = require('../genre.model');
const genreValidator  = require('../genre.validator');

module.exports = {
  createGenre: require('./create.genre')({ genreRepository, Genre, genreValidator }),
  readGenre  : require('./read.genre')({ genreRepository, Genre }),
  updateGenre: require('./update.genre')({ genreRepository, Genre, genreValidator }),
  deleteGenre: require('./delete.genre')({ genreRepository, Genre })
}
