const express = require('express')
const routeCustomer = express.Router();
const customerContoller = require('../controller/customercontroller');
const baseRouter = require('../routes/baserouter');

const controller = new customerContoller();
routeVideo.use((req, res, next) => {
	next();		
});

routeCustomer.get('/customer', (req, res) => {
   baseRouter.list(controller, req, res);
})

module.exports = routeCustomer;