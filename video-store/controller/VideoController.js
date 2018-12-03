const baseController = require('./baseController');
const Video = require('../model/videomodel');

class VideoController extends baseController{
  constructor() {
     super(Video, 'video', '_id');
  }
}

module.exports = VideoController;
