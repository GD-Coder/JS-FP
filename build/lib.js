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
const concat2= (s1, s2) => s1.concat(s2)
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
       return customers.map(customer => ({name: customer.name, shoppingList: ((entries(customer.shoppingList))
       .map((name) => itemRepeater(name[0])(name[1])))
       .reduce(concat2, [])})
 )
     }

module.exports = {
  listing,
  customer,
  constructCarts,
  itemRepeater
}
