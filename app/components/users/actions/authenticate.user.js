module.exports = ({ userRepository, User, userAuthenticationValidator, comparePassword }) =>
  async ({ password, email }) => {
    userAuthenticationValidator.validate({ password, email });
    const user = await userRepository.findByEmail(email);
    if (!user) throw new Error(`Invalid email or password`);
    const registeredUser = new User(user);
    console.log(registeredUser);
    console.log(password);
    const isValidPassword = await comparePassword(password, registeredUser.password);
    console.log(isValidPassword);
    if (!isValidPassword) throw new Error(`Invalid email or password`);
    return true;
  }
