module.exports = ({ movieRepository, genreRepository, Movie, movieValidator }) =>
  async (id, { title, genreId, numberInStock, dailyRentalRate }) => {
    movieValidator.validate({ title, genreId, numberInStock, dailyRentalRate });
    const genre = await genreRepository.findById(genreId);
    if (!genre) throw new Error(`Could not find genre with id ${genreId}`);
    const updatedMovie = new Movie({
      title,
      genre: {
        id  : genre.id,
        name: genre.name
      },
      numberInStock,
      dailyRentalRate
    });
    const updateResult = await movieRepository.update(id, updatedMovie);
    if (!updateResult) throw new Error(`Could not update movie with id ${id}`);
    return new Movie(updateResult);
  }
