class RentalMongoRepository {
  constructor({ mongoose, schemas }) {
    this.mongoose = mongoose;
    this.schemas  = schemas;
    this.Model    = this.mongoose.model('Rental', this.schema);
  }

  get schema() {
    return new this.mongoose.Schema(this.schemas.rentalSchema);
  }

  async findById(id) {
    return await this.Model.findById(id);
  }

  isAvalidId(id) {
    if (!this.mongoose.Types.ObjectId.isValid(id)) throw new Error(`id ${id} is not valid`);
  }

  async save(rental) {
    const newRental = new this.Model(rental);
    return await newRental.save();
  }

  async update(id, newRental) {
    this.isAvalidId(id);
    return await this.Model.findByIdAndUpdate(id, newRental, { new: true });
  }

  async all() {
    return await this.Model.find({});
  }

  async delete(id) {
    this.isAvalidId(id);
    return await this.Model.findByIdAndRemove(id);
  }
}

module.exports = ({ mongoose, schemas }) => new RentalMongoRepository({ mongoose, schemas });
