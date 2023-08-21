const productService = require("../bl/productService");

//get all product
const getProduct = (req, res) => {
    productService.getProduct()
    .then(products => 
    res.send(products));
};

//get product by id
const getProductBiId = (req, res) => {
    const product = productService.getProductBiId(req, res, req.params.id);
    res.send(product);
}

//create product
const createProduct = (req, res) => {
    const nowProduct = req.body;
    productService.createProduct(nowProduct);
    res.send("The product has been successfully added ")
}

const updatePproduct = (req, res) => {
    productService.updatePproduct(req, req.params.id)
    res.send("The product has been updated successfully")
}

module.exports = { getProduct, getProductBiId, createProduct, updatePproduct }