const baseController = require('./baseController');
const customer = require('../model/customermodel');

class CustomerController extends baseController{
  constructor() {
     super(customer, 'customer', '_id');
  }
}

module.exports = CustomerController;
