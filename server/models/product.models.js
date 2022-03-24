// import mongoose
const mongoose = require('mongoose');

// create Product Schema/ can set type of data, validation, requirements
const ProductSchema = new mongoose.Schema({
    title: {type: String},
    price: {type: Number},
    description: {type: String}
}, {timestamps: true});

module.exports.Product = mongoose.model('Product', ProductSchema);