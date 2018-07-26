const Joi = require('joi');

const customerSchema = {
  customerId: Joi.string().required(),
  movieId   : Joi.string().required()
};

module.exports = {
  validate: (customer) => {
    let result = Joi.validate(customer, customerSchema);
    if (result.error) {
      result = result.error.details.map(detail => detail.message);
      result = result.join();
      throw new Error(result);
    }
    return true;
  }
}
