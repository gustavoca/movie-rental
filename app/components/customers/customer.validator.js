const Joi = require('joi');

const customerSchema = {
  name  : Joi.string().required(),
  isGold: Joi.boolean().required(),
  phone : Joi.number().min(8).integer().positive().required()
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
