const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express()
const port = 3000

let orders = [
    {id: 0,name: 'Pizza', price: 120, count: 2, customer: 'Argo', date: Date.now(), status: 'ongoing'},
    {id: 1,name: 'Coca-cola 0.5l', price: 100, count: 1, customer: 'Afa', date: Date.now() + 5987, status: 'done'},
    {id: 2,name: 'Simit', price: 20, count: 3, customer: 'Nurs', date: Date.now() + 13421, status: 'ongoing'},
    {id: 3,name: 'Kahve', price: 18, count: 1, customer: 'Meerim', date: Date.now() + 12345, status: 'done'},
    {id: 4,name: 'Puding', price: 25, count: 1, customer: 'Kanykei', date: Date.now() + 13478, status: 'ongoing'},
    {id: 5,name: 'Pizza', price: 120, count: 2, customer: 'Argo', date: Date.now() + 2344, status: 'ongoing'},
    {id: 6,name: 'Coca-cola 0.5l', price: 100, count: 1, customer: 'Afa', date: Date.now() + 5983, status: 'done'},
    {id: 7,name: 'Simit', price: 20, count: 3, customer: 'Nurs', date: Date.now() + 13422, status: 'done'},
    {id: 8,name: 'Kahve', price: 18, count: 1, customer: 'Meerim', date: Date.now() + 12332, status: 'ongoing'},
    {id: 9,name: 'Puding', price: 25, count: 1, customer: 'Kanykei', date: Date.now() + 13465, status: 'done'},
    {id: 9,name: 'Puding', price: 25, count: 1, customer: 'Kanykei', date: Date.now() + 13465, status: 'done'},
]

let productList = [
    {name: 'Pizza', price: 120, count: 2, img: 'img', description: 'abc'},
    {name: 'Coca-cola 0.5l', price: 100, count: 1, img: 'img', description: 'abc'},
    {name: 'Simit', price: 20, count: 3, img: 'img', description: 'abc'},
    {name: 'Sandwich', price: 60, count: 3, img: 'img', description: 'abc'},
    {name: 'Coffee', price: 18, count: 2, img: 'img', description: 'abc'},
    {name: 'Coca-cola 0.5', price: 35, count: 1, img: 'img', description: 'abc'},
    {name: 'Fanta 0.5', price: 35, count: 3, img: 'img', description: 'abc'},
    {name: 'Albeni', price: 20, count: 3, img: 'img', description: 'abc'},
    {name: 'Snikers', price: 25, count: 2, img: 'img', description: 'abc'},
    {name: 'Pepsi', price: 35, count: 1, img: 'img', description: 'abc'},
    {name: 'Legenda', price: 25, count: 3, img: 'img', description: 'abc'},
    {name: 'Kit-Kat', price: 25, count: 3, img: 'img', description: 'abc'},
    {name: 'Kit-Kat', price: 25, count: 3, img: 'img', description: 'abc'},
]

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/url", (req, res, next) => {
    res.json(orders);
})

app.get("/productList", (req, res, next) => {
    res.json(productList);
})

app.post('/deleteOrder/:id',(req, res, next)=> {
    orders = orders.filter(order => order.id != req.params.id)
    res.json(orders)
})

app.post('/addProduct',jsonParser,(req, res, next)=> {
    console.log(req.body)
    productList = [...productList, req.body]
    res.json(productList)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})