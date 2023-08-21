const express = require('express');
const productController = require('./controllers/productController');
const router = express.Router();

//get all product
router.get('/product', productController.getProduct);

//get product by id
router.get('/:id', productController.getProductBiId);

//create product
router.post('/create-product',productController.createProduct);


module.exports = router;