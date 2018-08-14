class User {
  constructor({ id, name, password, email, isAdmin }) {
    this.id       = id;
    this.name     = name;
    this.password = password;
    this.email    = email;
    this.isAdmin  = isAdmin ? isAdmin: false;
  }

  get publicParameters() {
    return {
      name : this.name,
      email: this.email
    }
  }
}

module.exports = User;
