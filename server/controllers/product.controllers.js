// import models
const { Product } = require("../models/product.models");

//Create new product  
module.exports.createProduct = (request, response) => {
    // const {title, price, description} = request.body
    // Product.create(
    //     {
    //         title,
    //         price,
    //         description
    //     }
    // )
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

// Get all Products - GET - '/api/products'
module.exports.getAllProducts = (request, response) => {
    Product.find()
        .then(AllProducts => response.json(AllProducts))
        .catch(err => response.json(err))
}
// Get one Product - GET - '/api/product/:id'
module.exports.getOneProduct = (request, response) => {
    Product.findOne({_id: request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

// Update One Product by id - PUT - '/api/product/:id'
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

// Delete one person by Id - DELETE - '/api/product/:id'
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}