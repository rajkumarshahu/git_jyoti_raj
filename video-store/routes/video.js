const express = require('express')
const routeVideo = express.Router();
const videocontroller = require('../controller/VideoController');
const baseRouter = require('../routes/baserouter');

const controller = new videocontroller();
routeVideo.use((req, res, next) => {
	next();		
});

routeVideo.get('/video', (req, res) => {
   baseRouter.list(controller, req, res);
})


routeVideo.get('/video/:_id', (req, res) => {
    baseRouter.list(controller, req, res);
})

routeVideo.post('/video', (req, res) => {	
   baseRouter.save(controller, req, res);
});

routeVideo.put('/video/:_id', (req,res) => {	
    baseRouter.save(controller, req, res);
});

routeVideo.delete('/video/:_id', (req,res) => {	
    baseRouter.remove(controller, req, res);
});

module.exports = routeVideo;