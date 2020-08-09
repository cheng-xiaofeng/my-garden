const code1 = `const obj = {
  name: 'joe',
  age: 35,
  person1: {
    name: 'Tony',
    age: 50,
    person2: {
      name: 'Albert',
      age: 21,
      person3: {
        name: 'Peter',
        age: 23
      }
    }
  }
}
console.log(obj)


{
  name: 'joe',
  age: 35,
  person1: {
    name: 'Tony',
    age: 50,
    person2: {
      name: 'Albert',
      age: 21,
      person3: [Object]
    }
  }
}`

const code2 = `console.log(JSON.stringify(obj, null, 2))`

const code3 = `require('util').inspect.defaultOptions.depth = null
console.log(obj)`


export default{
  code1,
  code2,
  code3,
}