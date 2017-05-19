const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const FileStore = require('session-file-store')(session)

const products = require('./data/products.json')

const app = express()
const PORT = 3000

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use(session({
  name: 'jm-server-session-cookie-id',
  secret: '4u6mVaJtJrrhZb2iHx2ugBof',
  saveUninitialized: true,
  resave: true,
  store: new FileStore()
}))

app.use((req, res, next) => {
  req.session.cart = req.session.cart || []
  next()
})

app.get('/cart', (req, res) => {
  const cart = req.session.cart
  const numberOfProducts = cart.reduce( (acc, currentItem) => { return acc + parseInt(currentItem.quantity) },0)
  const detailedCart = cart.map( cartItem => {
    let aProductsIdFiltered = products.filter( item => { return cartItem.id === item.id })
    let detailsProduct = aProductsIdFiltered[0]
    detailsProduct.quantity = cartItem.quantity
    
    return detailsProduct
  })
  const totalOfProduct = detailedCart.map( cartItem => { return parseInt(cartItem.quantity * cartItem.price) })
  const totalOfOrder = totalOfProduct.reduce( (acc, total) => { return acc + total },0)

  if (detailedCart.length) {
    res.render('cart/index', { cart: detailedCart, numberOfProducts, totalOfProduct, totalOfOrder})
  } else {
    res.render('cart/empty')
  }
})

app.get('/', (req, res) => {
  const cart = req.session.cart
  const numberOfProducts = cart.reduce( (acc, currentItem) => { return acc + parseInt(currentItem.quantity) },0)
  res.render('list/index', { products, cart, numberOfProducts })
})

app.post('/cart-ajax', (req, res) => {
  const { id, quantity } = req.body
  req.session.cart.push({ id, quantity})
  res.status(200).send(`Added ${quantity} items to the cart`)
})

app.put('/cart/:id', (req, res) => {
  const id = req.params.id
  const quantity = req.body.quantity

  req.session.cart = req.session.cart.map(item => {
    if (item.id === id) {
      item.quantity = quantity
    }
    return item
  })
  res.status(200).send(`Order was succesfully updated`)
})

app.delete('/cart/:id', (req, res) => {
  const id = req.params.id
  const originalSize = req.session.cart.length
  
  req.session.cart = req.session.cart.filter(item => {
    return item.id !== id
  })
  if (originalSize === req.session.cart.length) {
    res.status(500).send(`Item was not removed from the cart`)
  } else {
    res.status(200).send(`Item was removed succesfully`)
  }
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))

