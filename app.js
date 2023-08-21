const express = require('express')
const app = express()
const router = require('./routes.js')
const morgan = require('morgan')
const port = 3000

app.use(express.json())
app.use(morgan('combined'))
app.use('/api', router)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})