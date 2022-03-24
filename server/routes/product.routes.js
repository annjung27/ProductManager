// import Product controller
const ProductControllers = require('../controllers/product.controllers');

// add routes (get, put, post, delete)
module.exports = function(app) {
    app.get('/api/products', ProductControllers.getAllProducts)  // get all products
    app.get('/api/product/:id', ProductControllers.getOneProduct) // get one products by id
    app.put('/api/product/:id', ProductControllers.updateProduct) // update one product by id
    app.post('/api/product/new', ProductControllers.createProduct) // create new product
    app.delete('/api/product/:id', ProductControllers.deleteProduct) // delete one product by id
}