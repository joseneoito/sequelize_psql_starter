const express = require("express");
const { database } = require('./database')
const app = express();
require('dotenv').config()
const port = process.env.port||3000

database.authenticate().then(() => {
    console.log('Connected to database')
}).catch(err => {
console.log('Error', err)
    process.exit(1)
})



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
