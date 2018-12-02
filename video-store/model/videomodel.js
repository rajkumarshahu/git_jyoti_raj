
var mongoose = require('mongoose');
const videoSchema = new mongoose.Schema({
    _id: {type: String},
    title: {type: String},
    runningTime: {type: String},
    genre: {type: String},
    rating: {type: String},
    director: {type: String},
    status: {type: String}
});

const Video =  mongoose.model('Video', videoSchema);

module.export = { Video }