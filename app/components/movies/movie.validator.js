const Joi = require('joi');

const customerSchema = {
  title          : Joi.string().required(),
  genreId        : Joi.string().required(),
  numberInStock  : Joi.number().integer().positive(),
  dailyRentalRate: Joi.number().positive().required()
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
