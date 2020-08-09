const code1 = `const buf = Buffer.from('Hey!')`

const code2 = `const buf = Buffer.alloc(1024)
//or
const buf = Buffer.allocUnsafe(1024)`

const code3 = `const buf = Buffer.from('Hey!')
console.log(buf[0]) //72
console.log(buf[1]) //101
console.log(buf[2]) //121`

const code4 = `console.log(buf.toString())`

const code5 = `const buf = Buffer.from('Hey!')
console.log(buf.length)`

const code6 = `const buf = Buffer.from('Hey!')
for (const item of buf) {
  console.log(item) //72 101 121 33
}`

const code7 = `const buf = Buffer.alloc(4)
buf.write('Hey!')`

const code8 = `const buf = Buffer.from('Hey!')
buf[1] = 111 //o
console.log(buf.toString()) //Hoy!`

const code9 = `const buf = Buffer.from('Hey!')
let bufcopy = Buffer.alloc(4) //allocate 4 bytes
buf.copy(bufcopy)`

const code10 = `const buf = Buffer.from('Hey!')
let bufcopy = Buffer.alloc(2) //allocate 2 bytes
buf.copy(bufcopy, 0, 0, 2)
bufcopy.toString() //'He'`

const code11 = `const buf = Buffer.from('Hey!')
buf.slice(0).toString() //Hey!
const slice = buf.slice(0, 2)
console.log(slice.toString()) //He
buf[1] = 111 //o
console.log(slice.toString()) //Ho`

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
  code10,
  code11
}