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
    res.send("The product has been successfully added ");
}

//Update product
const updatePproduct = (req, res) => {
    productService.updatePproduct(req.body, req.params.id);
    res.send("The product has been updated successfully");
}
//delete product
const deleteProduct = (req, res) => {
    productService.deleteProduct(req.params.id);
    res.send("The product has been successfully deleted");
}

//Changing the product quantity
const changingQuantity = (req, res) => {
    productService.changingQuantity(req.params.id, req.params.action);
    res.send("The quantity has been successfully updated");
}

module.exports = { getProduct, getProductBiId, createProduct, updatePproduct, deleteProduct, changingQuantity }