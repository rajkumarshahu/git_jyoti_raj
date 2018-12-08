var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: { type: String },
    password: { type: String },
    isAdmin: { type: String }
});

module.exports =  mongoose.model('videouser', userSchema)
