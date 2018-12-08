const express = require('express')
const routeCustomer = express.Router();
const customerContoller = require('../controller/customercontroller');
const baseRouter = require('../routes/baserouter');

const controller = new customerContoller();
routeCustomer.use((req, res, next) => {
	next();		
});

routeCustomer.get('/customer', (req, res) => {
   baseRouter.list(controller, req, res);
})

routeCustomer.post('/customer', (req, res) => {	
   baseRouter.save(controller, req, res);
});

module.exports = routeCustomer;