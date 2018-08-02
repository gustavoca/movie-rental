class UserMongoRepository {
  constructor({ mongoose, schemas }) {
    this.mongoose = mongoose;
    this.schemas  = schemas;
    this.Model    = this.mongoose.model('User', this.schema);
  }

  get schema() {
    return new this.mongoose.Schema(this.schemas.userSchema);
  }

  async findById(id) {
    return await this.Model.findById(id);
  }

  async findByEmail(email) {
    return await this.Model.findOne({ email: email });
  }

  isAvalidId(id) {
    if (!this.mongoose.Types.ObjectId.isValid(id)) throw new Error(`id ${id} is not valid`);
  }

  async save(user) {
    const newUser = new this.Model(user);
    return await newUser.save();
  }

  async update(id, newUser) {
    this.isAvalidId(id);
    return await this.Model.findByIdAndUpdate(id, newUser, { new: true });
  }

  async all() {
    return await this.Model.find({});
  }

  async delete(id) {
    this.isAvalidId(id);
    return await this.Model.findByIdAndRemove(id);
  }
}

module.exports = ({ mongoose, schemas }) => new UserMongoRepository({ mongoose, schemas });
