module.exports = ({ movieRepository, genreRepository, Movie, movieValidator }) =>
  async ({ title, genreId, numberInStock, dailyRentalRate }) => {
    movieValidator.validate({ title, genreId, numberInStock, dailyRentalRate });
    const genre = await genreRepository.findById(genreId);
    if (!genre) throw new Error(`Could not find genre with id ${genreId}`);
    let newMovie = new Movie({
      title,
      genre: {
        id  : genre.id,
        name: genre.name
      },
      numberInStock,
      dailyRentalRate });
    newMovie = await movieRepository.save(newMovie);
    newMovie = new Movie(newMovie);
    return newMovie;
  }
