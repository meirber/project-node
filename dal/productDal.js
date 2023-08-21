const jsonfile = require("jsonfile");


const getData = (req, res) => {
    const data = jsonfile.readFile("./data.json")
            return data
};

const createProduct = (newProduct) => {
    jsonfile.readFile("./data.json")
        .then(data => {
            data.products.push(newProduct);
            return jsonfile.writeFile('./data.json', data);
        })
}

module.exports = { getData, createProduct };