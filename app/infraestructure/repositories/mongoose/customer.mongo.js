class CustomerMongoRepository {
  constructor({ mongoose, schemas }) {
    this.mongoose = mongoose;
    this.schemas = schemas;
    this.Model    = this.mongoose.model('Customer', this.schema);
  }

  get schema() {
    return new this.mongoose.Schema(this.schemas.customerSchema);
  }

  async findById(id) {
    return await this.Model.findById(id);
  }

  isAvalidId(id) {
    if (!this.mongoose.Types.ObjectId.isValid(id)) throw new Error(`id ${id} is not valid`);
  }

  async save(customer) {
    const newCostumer = new this.Model(customer);
    return await newCostumer.save();
  }

  async update(id, newCostumer) {
    this.isAvalidId(id);
    return await this.Model.findByIdAndUpdate(id, newCostumer, { new: true });
  }

  async all() {
    return await this.Model.find({});
  }

  async delete(id) {
    this.isAvalidId(id);
    return await this.Model.findByIdAndRemove(id);
  }
}

module.exports = ({ mongoose, schemas }) => new CustomerMongoRepository({ mongoose, schemas });
