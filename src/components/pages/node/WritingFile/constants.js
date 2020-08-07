const code1 = `const fs = require('fs')

const content = 'Some content!'

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})`
const code2 = `const fs = require('fs')

const content = 'Some content!'

try {
  const data = fs.writeFileSync('/Users/joe/test.txt', content)
  //file written successfully
} catch (err) {
  console.error(err)
}`

const code3 = `fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => {})`

const code4 = `const content = 'Some content!'

fs.appendFile('file.log', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //done!
})`
export default{
  code1,
  code2,
  code3,
  code4
}