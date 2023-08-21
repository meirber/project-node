const jsonfile = require("jsonfile");


const getData = (req, res) => {
    const data = jsonfile.readFile("./data.json")
    return data
};

const createProduct = (newProduct) => {
    jsonfile.readFile("./data.json")
        .then(data => {
            data.push(newProduct);
            return jsonfile.writeFile('./data.json', data);
        })
}

const updatePproduct = (newProduct, id) => {
    jsonfile.readFile('./data.json')
        .then(data => {
            data.forEach((product, i) => {
                if (product.id === +id) data[i] = newProduct;
            });
            return jsonfile.writeFile('./data.json', data);
        })
}

const deleteProduct = (id) => {
    jsonfile.readFile('./data.json')
        .then(data => {
            data.forEach(product => {
                if (product.id === +id) {
                    data.splice(product, 1)};
            });
            return jsonfile.writeFile('./data.json', data);
        })
}

const changingQuantity = (id, action) => {
    jsonfile.readFile('./data.json')
        .then(data => {
            data.forEach((product, i) => {
                if (product.id === +id) {
                    if (action === '+' ) data[i].quantity+= 1
                else{
                    data[i].quantity-= 1
                }};
            });
            return jsonfile.writeFile('./data.json', data);
        })
}

module.exports = { getData, createProduct, updatePproduct, deleteProduct, changingQuantity };