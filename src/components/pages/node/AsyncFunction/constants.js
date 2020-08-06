const code1 = `const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}`

const code2 = `const doSomething = async () => {
  console.log(await doSomethingAsync())
}`

const code3 = `const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}

const doSomething = async () => {
  console.log(await doSomethingAsync())
}

console.log('Before')
doSomething()
console.log('After')`

const code4 = `Before
After
I did something`

const code5 = `const aFunction = async () => {
  return 'test'
}

aFunction().then(alert) // This will alert 'test'`

const code6 = `const aFunction = async () => {
  return Promise.resolve('test')
}

aFunction().then(alert) // This will alert 'test'`

const code7 = `const getFirstUserData = () => {
  return fetch('/users.json') // get users list
    .then(response => response.json()) // parse JSON
    .then(users => users[0]) // pick first user
    .then(user => fetch(\`/users/\${user.name}\`)) // get user data
    .then(userResponse => userResponse.json()) // parse JSON
}

getFirstUserData()`

const code8 = `const getFirstUserData = async () => {
  const response = await fetch('/users.json') // get users list
  const users = await response.json() // parse JSON
  const user = users[0] // pick first user
  const userResponse = await fetch(\`/users/\${user.name}\`) // get user data
  const userData = await userResponse.json() // parse JSON
  return userData
}

getFirstUserData()`

const code9 = `const promiseToDoSomething = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 10000)
  })
}

const watchOverSomeoneDoingSomething = async () => {
  const something = await promiseToDoSomething()
  return something + '\nand I watched'
}

const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
  const something = await watchOverSomeoneDoingSomething()
  return something + '\nand I watched as well'
}

watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
  console.log(res)
})`

const code10 = `I did something
and I watched
and I watched as well`

export default {
  code1,
  code2,
  code3,
  code4,
  code5,
  code6,
  code7,
  code8,
  code9,
  code10
}