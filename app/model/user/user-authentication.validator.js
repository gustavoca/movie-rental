const Joi = require('joi');

const customerSchema = {
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  email   : Joi.string().email()
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
