const express = require('express')
const routeVideo = express.Router();
//const videocontroller = require('../controller/VideoController');
const baseRouter = require('./baserouter');
var utils = require('../utils/utils')

const Video = require('../model/videomodel');
const baseController = require('../controller/baseController');



routeVideo.use((req, res, next) => {
	next();		
});

routeVideo.get('/video', (req, res) => {
    baseController
    .onInit(Video, "video", '_id')
    .list()
    .then(utils.ok(res))
    .then(null, utils.fail(res));
   // baseRouter.list(videocontroller, req, res);
})

routeVideo.get('/video/:key', (req, res) => {
    //baseRouter.list(videocontroller, req, res);
})

routeVideo.post('/video', (req,res) => {	
   // baseRouter.removesave(videocontroller, req, res);
});

routeVideo.put('/video/:key', (req,res) => {	
    //baseRouter.save(videocontroller, req, res);
});

routeVideo.delete('/video/:key', (req,res) => {	
    //baseRouter.remove(videocontroller, req, res);
});

module.exports = routeVideo;