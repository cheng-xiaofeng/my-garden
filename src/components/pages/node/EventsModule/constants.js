const code1 = `const EventEmitter = require('events')
const door = new EventEmitter()`

const code2 = `door.emit("slam") // emitting the event "slam"`

const code3 = `door.eventNames()`

const code4 = `door.getMaxListeners()`

const code5 = `door.listenerCount('open')`

const code6 = `door.listeners('open')`

const code7 = `door.on('open', () => {
  console.log('Door was opened')
})`

const code8 = `const EventEmitter = require('events')
const ee = new EventEmitter()

ee.once('my-event', () => {
  //call callback function once
})`

const code9 = `door.removeAllListeners('open')`

const code10 = `const doSomething = () => {}
door.on('open', doSomething)
door.removeListener('open', doSomething)`

const code11 = `door.setMaxListeners(50)`
export default{
  code1,
  code2,
  code3,
  code4,
  code5,
  code6,
  code7,
  code8,
  code9,
  code10,
  code11
}