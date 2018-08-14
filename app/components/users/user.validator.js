const Joi = require('joi');

const customerSchema = {
  name    : Joi.string().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  email   : Joi.string().email(),
  isAdmin : Joi.boolean()
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
