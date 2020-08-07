const code1 = `const fs = require('fs')`

const code2 = `const fs = require('fs')
try {
  const stats = fs.statSync('/Users/joe/test.txt')
} catch (err) {
  console.error(err)
}`

const code3 = `const fs = require('fs')

try {
  fs.renameSync('before.json', 'after.json')
  //done
} catch (err) {
  console.error(err)
}`

export default{
  code1, 
  code2, 
  code3
}