'use strict'

const util = require('util')

const {
  listing,
  customer,
  constructCarts,
  itemRepeater
} = require('./lib.js')

const listings = [
  listing('detergent', 10),
  listing('hennessey', 100),
  listing('carlo rozzi', 20),
  listing('coffee', 5),
  listing('cookies', 6),
  listing('mountain dew', 2)
]

const customers = [
  customer('adam', {
    'carlo rozzi': 6
  }),
  customer('david', {
    detergent: 1,      // name of item: quantity of item
    hennessey: 1,
    coffee: 1
  }),
  customer('michael', {
    coffee: 3,
    hennessey: 3
  }),
  customer('dillon', {
    cookies: 3,
    'mountain dew': 3
  })
]
const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])
// let testItems = []
let result3 = []


// const items = listings.map(listing)
// const itemList = items.map(item => item.name)
const stuff = customers.map((customer) => customer.shoppingList)
// const name = customers.map((customer) => customer.name)
const shoppingList = stuff.map(entries)
const tester = itemRepeater(shoppingList[0][0][0], shoppingList[0][0][1])
// const test = customers.map(customer).filter(custom => result.push(custom.name, custom.shoppingList))
// const test2 = test.map(custom => custom.name.shoppingList)
const carts = constructCarts(listings)
carts(customers)
  .forEach(cart => console.log(`${cart.name}, your cart contains ${util.inspect(cart.shoppingList)}`))
console.log(tester)
