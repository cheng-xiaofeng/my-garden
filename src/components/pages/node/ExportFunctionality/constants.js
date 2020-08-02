const code1 = `const library = require('./library')`

const code2 = `const car = {
  brand: 'Ford',
  model: 'Fiesta'
}

module.exports = car

//..in the other file

const car = require('./car')`

const code3 = `const car = {
  brand: 'Ford',
  model: 'Fiesta'
}

exports.car = car`

const code4 = `exports.car = {
  brand: 'Ford',
  model: 'Fiesta'
}`

const code5 = `const items = require('./items')
items.car`

const code6 = `const car = require('./items').car`

export {
  code1, 
  code2, 
  code3, 
  code4, 
  code5, 
  code6
}