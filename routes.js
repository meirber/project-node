const express = require('express');
const productController = require('./controllers/productController');
const router = express.Router();

//get all product
router.get('/product', productController.getProduct);

//get product by id
router.get('/:id', productController.getProductBiId);

//create product
router.post('/create-product',productController.createProduct);

//Update product
router.put('/update-product/:id', productController.updatePproduct);

//delete product
router.delete('/delete-product/:id', productController.deleteProduct);

//Changing the product quantity
router.put('/changing-quantity/:id/:action',productController.changingQuantity);

module.exports = router;