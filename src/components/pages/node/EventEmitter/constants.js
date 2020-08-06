const code1 = `const EventEmitter = require('events')
const eventEmitter = new EventEmitter()`

const code2 = `eventEmitter.on('start', () => {
  console.log('started')
})`

const code3 = `eventEmitter.emit('start')`

const code4 = `eventEmitter.on('start', number => {
  console.log(\`started \${number}\`)
})

eventEmitter.emit('start', 23)`

const code5 = `eventEmitter.on('start', (start, end) => {
  console.log(\`started from \${start} to \${end}\`)
})

eventEmitter.emit('start', 1, 100)`
export default{
  code1,
  code2,
  code3,
  code4,
  code5
}