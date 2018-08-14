module.exports = ({ genreRepository, Genre, genreValidator }) =>
  async (id, updatedGenre) => {
    genreValidator.validate(updatedGenre);
    updatedGenre = new Genre(updatedGenre);
    const updateResult = await genreRepository.update(id, updatedGenre);
    if (!updateResult) throw new Error(`Could not find genre with id ${id}`);
    return new Genre(updateResult);
  }
