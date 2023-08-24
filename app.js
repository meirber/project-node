const express = require('express');
const app = express();
const router = require('./routes.js');
const morgan = require('morgan');
const productsDal = require("./dal/productDal.js");
const cors = require('cors')
const port = 3000

// app.use(cors({
//     origin: '*'
// }));
app.use(cors())
app.use(express.json())
app.use(morgan('combined'))
app.use('/api', router)

app.listen(port, () => {
    // productsDal.createData();
    console.log(`App listening on port ${port}`)
})