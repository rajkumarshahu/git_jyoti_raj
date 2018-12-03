const baseController = require('./baseController');
const videouser = require('../model/usermodel');

class UserController extends baseController{
  constructor() {
     super(videouser, 'videouser', '_id');
  }
}

module.exports = UserController;