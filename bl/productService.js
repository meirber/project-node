const productsDal = require("../dal/productDal.js");

const getProduct = () => {
    const products = productsDal.getData();
    return products;
};

const getProductBiId = async (id) => {
    const data = await productsDal.getData();
    const filteredProducts = data.filter(product => product.id == id);
    if (filteredProducts.length > 0) {
        return filteredProducts;
    } else {
        throw new Error("מוצר לא נמצא");
    }
};

const createProduct = (newProduct) => {
    productsDal.createProduct(newProduct);
};

const updatePproduct = (product, id) => {
    productsDal.updatePproduct(product, id);
};

const deleteProduct = (id) => {
    productsDal.deleteProduct(id);
}

const changingQuantity = (id, action) => {
    productsDal.changingQuantity(id, action)
}

module.exports = { getProduct, getProductBiId, createProduct, updatePproduct, deleteProduct, changingQuantity }