const code1 = `const axios = require('axios')

axios.post('https://whatever.com/todos', {
  todo: 'Buy the milk'
})`

const code2 = `const bodyParser = require('body-parser')

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  console.log(req.body.todo)
})`

const code3 = `const server = http.createServer((req, res) => {
  // we can access HTTP headers
  req.on('data', chunk => {
    console.log(\`Data chunk available: \${chunk}\`)
  })
  req.on('end', () => {
    //end of data
  })
})`

const code4 = `const server = http.createServer((req, res) => {
  let data = []
  req.on('data', chunk => {
    data.push(chunk)
  })
  req.on('end', () => {
    JSON.parse(data).todo // 'Buy the milk'
  })
})`


export default{
  code1,
  code2,
  code3,
  code4,
}