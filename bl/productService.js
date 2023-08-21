const productsDal = require("../dal/productDal.js");


function idCheck(id) {
    const data = getProduct()
        .then(data => {
            console.log(data)
            return data.some(id)
        })
}

const getProduct = () => {
    const products = productsDal.getData();
    return products;
};

const getProductBiId = async (id) => {
    const data = await productsDal.getData();
    return data.filter(product => product.id == id); 
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