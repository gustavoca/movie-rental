class Movie {
  constructor({ id, title, numberInStock, dailyRentalRate, genre }) {
    this.id               = id;
    this.title            = title;
    this.genre            = genre;
    this.numberInStock    = numberInStock;
    this.dailyRentalRate  = dailyRentalRate;
  }
}

module.exports = Movie;
