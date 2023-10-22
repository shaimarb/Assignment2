const express = require('express');
const router = express.Router();

/*const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  removeProductById
} = require('../controller/product.controller');
*/

const productController = require('../controller/product.controller');


// Define routes for CRUD operations

// Get all products
//router.get('/', getAllProducts);
router.get('/', productController.getAllProducts);

// Get a product by ID
//router.get('/:id', getProductById);
router.get('/:id', productController.getProductById);


// Add a new product
//router.post('/', addProduct);
router.post('/', productController.addProduct);


// Update a product by ID
//router.put('/:id', updateProductById);
router.put('/:id', productController.updateProductById);

// Remove a product by ID
//router.delete('/:id', removeProductById);
router.delete('/:id', productController.removeProductById);

// Remove all products
router.delete('/', productController.removeAllProducts);

// Find products by name
router.get('/api/products', productController.findProductsByName);

module.exports = router;
