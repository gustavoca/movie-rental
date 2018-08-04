const bcrypt = require('bcrypt');

const encrypt = async ({ password }) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

const compare = async (password1, password2) => {
  return await bcrypt.compare(password1, password2);
}

module.exports = {
  encryptPassword: encrypt,
  comparePassword: compare
}
