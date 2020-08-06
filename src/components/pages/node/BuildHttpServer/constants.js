const code1 = `const http = require('http')

const port = process.env.PORT

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello, World!</h1>')
})

server.listen(port, () => {
  console.log(\`Server running at port \${port}\`)
})`

const code2 = `Hello, World!`

const code3 = `res.statusCode = 200`

const code4 = `res.setHeader('Content-Type', 'text/plain')`

const code5 = `res.end('Hello World\n')`


export default {
  code1,
  code2,
  code3,
  code4,
  code5,
}