//Name: Nguyen Ha Phuong - 301147401
//Date: 23-Oct-2021

let mongoose = require('mongoose');

// Create a model class
let businessModel = mongoose.Schema(
    {
        name: String,
        number: Number,
        email: String,
    },
    {
        collection: "business"
    }
);

module.exports = mongoose.model('Business', businessModel);