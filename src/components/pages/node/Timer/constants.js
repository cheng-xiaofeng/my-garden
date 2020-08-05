const code1 = `setTimeout(() => {
  // 2秒钟后执行
}, 2000)

setTimeout(() => {
  // 50毫秒后执行
}, 50)`

const code2 = `const myFunction = (firstParam, secondParam) => {
  // do something
}

// runs after 2 seconds
setTimeout(myFunction, 2000, firstParam, secondParam)`

const code3 = `const id = setTimeout(() => {
  // should run after 2 seconds
}, 2000)

// I changed my mind
clearTimeout(id)`

const code4 = `setTimeout(() => {
  console.log('after ')
}, 0)

console.log(' before ')`

const code5 = `setInterval(() => {
  // runs every 2 seconds
}, 2000)`

const code6 = `const id = setInterval(() => {
  // runs every 2 seconds
}, 2000)

clearInterval(id)`

const code7 = `const interval = setInterval(() => {
  if (App.somethingIWait === 'arrived') {
    clearInterval(interval)
    return
  }
  // otherwise do things
}, 100)`

const code8 = `const myFunction = () => {
  // do something

  setTimeout(myFunction, 1000)
}

setTimeout(myFunction, 1000)`
export default{
  code1,
  code2,
  code3,
  code4,
  code5,
  code6,
  code7,
  code8
}