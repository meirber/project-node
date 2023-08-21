const productsDal = require("../dal/productDal.js");

const getProduct = (req, res) => {
    const products = productsDal.getData();
    return products;
};

const getProductBiId = (req, res, id) => {
    const products = productsDal.getData();
    const product = products.filter(product => product.id == id);
    return product
}

const createProduct = (newProduct) => {
     productsDal.createProduct(newProduct)
}

const updatePproduct = (product, id) => {
    productsDal.updatePproduct(product, id);
}

const deleteProduct = (id) => {
    productsDal.deleteProduct(id);
}

const changingQuantity = (id, action) => {
    productsDal.changingQuantity(id, action)
}

module.exports = { getProduct, getProductBiId, createProduct, updatePproduct, deleteProduct, changingQuantity}