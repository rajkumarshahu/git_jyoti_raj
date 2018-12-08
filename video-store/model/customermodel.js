var mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    firstName: { type: String },
    lastname: { type: String },
    address: { type: String },
    city: { type: String },
    phoneNumber: { type: String },
    status: { type: String }
});

module.exports =  mongoose.model('customer', customerSchema)

