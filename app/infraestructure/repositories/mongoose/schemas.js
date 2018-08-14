const customerSchema = {
  name  : String,
  isGold: Boolean,
  phone : Number
}

const genreSchema = {
  name: String
}

const movieSchema = {
  title: String,
  genre: {
    type    : genreSchema,
    required: true
  },
  numberInStock  : Number,
  dailyRentalRate: Number
}

const rentalSchema = {
  customer: {
    type: customerSchema
  },
  movie: {
    type: movieSchema
  },
  dateOut     : Date,
  dateReturned: Date,
  rentalFee   : Number
}

const userSchema = {
  name    : String,
  email   : String,
  password: String,
  isAdmin : Boolean
}

module.exports = {
  customerSchema: customerSchema,
  genreSchema   : genreSchema,
  movieSchema   : movieSchema,
  rentalSchema  : rentalSchema,
  userSchema    : userSchema
}
