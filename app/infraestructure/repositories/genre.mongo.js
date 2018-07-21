class GenreMongoRepository {
  constructor(mongoose) {
    this.mongoose = mongoose;
    this.Model    = this.mongoose.model('Genre', this.schema);
  }

  get schema() {
    return new this.mongoose.Schema({
      name: String
    });
  }

  async findById(id) {
    return await this.Model.findById(id);
  }

  isAvalidId(id) {
    if (!this.mongoose.Types.ObjectId.isValid(id)) throw new Error(`id ${id} is not valid`);
  }

  async save(genre) {
    const newGenre = new this.Model(genre);
    return await newGenre.save();
  }

  async update(id, newGenre) {
    this.isAvalidId(id);
    return await this.Model.findByIdAndUpdate(id, newGenre, { new: true });
  }

  async all() {
    return await this.Model.find({});
  }

  async delete(id) {
    this.isAvalidId(id);
    return await this.Model.findByIdAndRemove(id);
  }
}

module.exports = ({ mongoose }) => new GenreMongoRepository(mongoose);
