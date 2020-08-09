const code1 = `throw value`

const code2 = `throw new Error('Ran out of coffee')`

const code3 = `class NotEnoughCoffeeError extends Error {
  //...
}
throw new NotEnoughCoffeeError()`

const code4 = `try {
  //lines of code
} catch (e) {}`

const code5 = `process.on('uncaughtException', err => {
  console.error('There was an uncaught error', err)
  process.exit(1) //mandatory (as per the Node.js docs)
})`

const code6 = `doSomething1()
.then(doSomething2)
.then(doSomething3)
.catch(err => console.error(err))`

const code7 = `const doSomething1 = () => {
  //...
  try {
    //...
  } catch (err) {
    //... handle it locally
    throw new Error(err.message)
  }
  //...
}`

const code8 = `doSomething1()
.then(() => {
  return doSomething2().catch(err => {
    //handle error
    throw err //break the chain!
  })
})
.then(() => {
  return doSomething2().catch(err => {
    //handle error
    throw err //break the chain!
  })
})
.catch(err => console.error(err))`

const code9 = `async function someFunction() {
  try {
    await someOtherFunction()
  } catch (err) {
    console.error(err.message)
  }
}`

export default{
  code1,
  code2,
  code3,
  code4,
  code5,
  code6,
  code7,
  code8,
  code9
}