
var mongoose = require('mongoose');
const videoSchema = new mongoose.Schema({
    title: { type: String },
    runningTime: { type: String },
    genre: { type: String },
    rating: { type: String },
    director: { type: String },
    status: { type: String }
});

module.exports =  mongoose.model('Video', videoSchema)