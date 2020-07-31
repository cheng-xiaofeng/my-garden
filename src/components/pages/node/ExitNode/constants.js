const processExit = 'process.exit(1)'
const processExit2 = 'process.exitCode = 1'
const httpServer = `const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Hi!')
})
app.listen(3000, () => console.log('Server ready'))`
const httpServer2 = `const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Hi!')
})
const server = app.listen(3000, () => console.log('Server ready'))
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})`
const processExit3 = `process.kill(process.pid, 'SIGTERM')`
export {
  processExit,
  processExit2,
  httpServer,
  httpServer2,
  processExit3
}