const {
  movieRepository,
  genreRepository
} = require('../../infraestructure/repositories');
const Movie           = require('../../model/movie/movie.model');
const movieValidator  = require('../../model/movie/movie.validator');

module.exports = {
  createMovie: require('./create.movie')({ movieRepository, genreRepository, Movie, movieValidator }),
  readMovie  : require('./read.movie')({ movieRepository, Movie }),
  updateMovie: require('./update.movie')({ movieRepository, genreRepository, Movie, movieValidator }),
  deleteMovie: require('./delete.movie')({ movieRepository, Movie })
}
