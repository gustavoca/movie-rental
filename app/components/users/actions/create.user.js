module.exports = ({ userRepository, User, userValidator }) =>
  async ({ name, password, email }) => {
    userValidator.validate({ name, password, email });
    const userExist = await userRepository.findByEmail(email);
    if (userExist) throw new Error(`There another user already registered with email: ${email}`);
    let newUser = new User({ name, password, email });
    newUser = await userRepository.save(newUser);
    newUser = new User(newUser);
    return newUser;
  }
