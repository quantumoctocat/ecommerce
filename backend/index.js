const express = require("express")
const cors = require("cors")
const products = require("./products.js")
const app = express()

app.use(express.json())
app.use(cors())
app.get("/", (req, res) => {
  res.send("Welcome to our online shop API")
})
app.get("/products", (req, res) => {
  res.send(JSON.stringify(products))
//  console.log(products)
})
const port = process.env.PORT || 5000
//console.log(port)
app.listen(port, console.log(`Server running on port ${port}`))
