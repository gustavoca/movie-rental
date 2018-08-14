class Genre {
  constructor({ id, name, isGold, phone, errors }) {
    this.id     = id;
    this.name   = name;
    this.isGold = isGold;
    this.phone  = phone;
    this.errors = errors;
  }
}

module.exports = Genre;
