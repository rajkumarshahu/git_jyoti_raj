var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: { type: String },
    password: { type: String },
    isAdmin: { type: Boolean }
});

module.exports =  mongoose.model('Videouser', userSchema)
