const code1 = `const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res) {
  fs.readFile(__dirname + '/data.txt', (err, data) => {
    res.end(data)
  })
})
server.listen(3000)`

const code2 = `const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + '/data.txt')
  stream.pipe(res)
})
server.listen(3000)`

const code3 = `src.pipe(dest1).pipe(dest2)`

const code4 = `src.pipe(dest1)
dest1.pipe(dest2)`

const code5 = `const Stream = require('stream')
const readableStream = new Stream.Readable()`

const code6 = `readableStream._read = () => {}`

const code7 = `const readableStream = new Stream.Readable({
  read() {}
})`

const code8 = `readableStream.push('hi!')
readableStream.push('ho!')`

const code9 = `const Stream = require('stream')
const writableStream = new Stream.Writable()`

const code10 = `writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}`

const code11 = `process.stdin.pipe(writableStream)`

const code12 = `const Stream = require('stream')

const readableStream = new Stream.Readable({
  read() {}
})
const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

readableStream.pipe(writableStream)

readableStream.push('hi!')
readableStream.push('ho!')`

const code13 = `readableStream.on('readable', () => {
  console.log(readableStream.read())
})`

const code14 = `writableStream.write('hey!\n')`

const code15 = `const Stream = require('stream')

const readableStream = new Stream.Readable({
  read() {}
})
const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  next()
}

readableStream.pipe(writableStream)

readableStream.push('hi!')
readableStream.push('ho!')

writableStream.end()`
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
  code11,
  code12,
  code13,
  code14,
  code15
}