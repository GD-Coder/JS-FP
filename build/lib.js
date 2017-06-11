'use strict'
// ---------------------------------------------------------------------UTILS------------------------------------------------------------------
const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => {
      return new Array(count).fill(itemName)
      // TODO
    }

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => {
      let result = []
      customers.map(customer).filter(custom =>
      result.push(custom.name, custom.shoppingList))
      return result
    }

module.exports = {
  listing,
  customer,
  constructCarts
}
