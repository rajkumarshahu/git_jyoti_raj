var mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
    city: { type: String },
    phoneNumber: { type: String },
    status: { type: String }
});

module.exports =  mongoose.model('customer', customerSchema);

