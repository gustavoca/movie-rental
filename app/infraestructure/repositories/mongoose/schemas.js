const customerSchemas = {
  name  : String,
  isGold: Boolean,
  phone : Number
}

const genreSchema = {
  name: String
}

const movieSchema = {
  title : String,
  genre: {
    type    : genreSchema,
    required: true
  },
  numberInStock  : Number,
  dailyRentalRate: Number
}

module.exports = {
  customerSchema: customerSchemas,
  genreSchema   : genreSchema,
  movieSchema   : movieSchema
}
