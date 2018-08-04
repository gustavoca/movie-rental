class User {
  constructor({ id, name, password, email }) {
    this.id       = id;
    this.name     = name;
    this.password = password;
    this.email    = email;
  }

  get publicParameters() {
    return {
      name : this.name,
      email: this.email
    }
  }
}

module.exports = User;
