module.exports = ({ userRepository, User, userAuthenticationValidator, comparePassword, createToken }) =>
  async ({ password, email }) => {
    userAuthenticationValidator.validate({ password, email });
    const user = await userRepository.findByEmail(email);
    if (!user) throw new Error(`Invalid email or password`);
    const registeredUser = new User(user);
    const isValidPassword = await comparePassword(password, registeredUser.password);
    if (!isValidPassword) throw new Error(`Invalid email or password`);
    return createToken(registeredUser);
  }
