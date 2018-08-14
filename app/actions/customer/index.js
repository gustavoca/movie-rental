const customerRepository = require('../../infraestructure/repositories').customerRepository;
const Customer           = require('../../model/customer/customer.model');
const customerValidator  = require('../../model/customer/customer.validator');

module.exports = {
  createCustomer: require('./create.customer')({ customerRepository, Customer, customerValidator }),
  readCustomer  : require('./read.customer')({ customerRepository, Customer }),
  updateCustomer: require('./update.customer')({ customerRepository, Customer, customerValidator }),
  deleteCustomer: require('./delete.customer')({ customerRepository, Customer })
}
