class MovieMongoRepository {
  constructor({ mongoose, schemas }) {
    this.mongoose = mongoose;
    this.schemas  = schemas;
    this.Model    = this.mongoose.model('Movie', this.schema);
  }

  get schema() {
    return new this.mongoose.Schema(this.schemas.movieSchema);
  }

  async findById(id) {
    return await this.Model.findById(id);
  }

  isAvalidId(id) {
    if (!this.mongoose.Types.ObjectId.isValid(id)) throw new Error(`id ${id} is not valid`);
  }

  async save(movie) {
    console.log("before ", movie);
    const newMovie = new this.Model(movie);
    console.log("Asfsaf")
    return await newMovie.save();
  }

  async update(id, newMovie) {
    this.isAvalidId(id);
    return await this.Model.findByIdAndUpdate(id, newMovie, { new: true });
  }

  async all() {
    return await this.Model.find({});
  }

  async delete(id) {
    this.isAvalidId(id);
    return await this.Model.findByIdAndRemove(id);
  }
}

module.exports = ({ mongoose, schemas }) => new MovieMongoRepository({ mongoose, schemas });
