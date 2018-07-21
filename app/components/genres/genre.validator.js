const Joi = require('joi');

const genresSchema = {
  name: Joi.string().required()
};

module.exports = {
  validate: (genre) => {
    let result = Joi.validate(genre, genresSchema);
    if (result.error) {
      result = result.error.details.map(detail => detail.message);
      result = result.error.join();
      throw new Error(result);
    }
    return true;
  }
}
