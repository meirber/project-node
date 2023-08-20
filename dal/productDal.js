const products = require("../data.json");
const jsonfile = require("jsonfile");


const getData = (req, res) => {
    return products.products
};

const createProduct = (newProduct) => {
    jsonfile.readFile("./data.json")
        .then(data => {
            data.products.push(newProduct);
            return jsonfile.writeFile('./data.json', data);
        })
}

module.exports = { getData, createProduct };