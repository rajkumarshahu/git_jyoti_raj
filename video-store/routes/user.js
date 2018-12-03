const express = require('express')
const routeuser = express.Router();
const userController = require('../controller/usercontroller');
const baseRouter = require('../routes/baserouter');

const controller = new userController();
routeuser.use((req, res, next) => {
	next();		
});

routeuser.get('/user', (req, res) => {
    baseRouter.list(controller, req, res);
})

routeuser.get('/user/:userName/:password', (req, res) => {
    baseRouter.list(controller, req, res);
})

routeuser.post('/user', (req, res) => {	
    baseRouter.save(controller, req, res);
 });

module.exports = routeuser;