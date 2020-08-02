const startCode='node app.js'
const startCode2 = 'node app.js joe'
const startCode3 = 'node app.js name=joe'
const processArgv = `process.argv.forEach((val, index) => {
  console.log(\`\${index}: \`\${val})
})`
const args = `const args = process.argv.slice(2)`
const args2 = `const args = process.argv.slice(2)
args[0]`
const args3 = `const args = require('minimist')(process.argv.slice(2))
args['name'] //joe`
const startCode4 = `node app.js --name=joe`

export {
  startCode,
  startCode2,
  startCode3,
  startCode4,
  processArgv,
  args,
  args2,
  args3
}
