const code1 = `const fs = require('fs')

const folderName = '/Users/joe/test'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}`
const code2 = `const fs = require('fs')
const path = require('path')

const folderPath = '/Users/joe'

fs.readdirSync(folderPath)`

const code3 = `fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName)
})`

const code4 = `const isFile = fileName => {
  return fs.lstatSync(fileName).isFile()
}

fs.readdirSync(folderPath).map(fileName => {
  return path.join(folderPath, fileName)
})
.filter(isFile)`

const code5 = `const fs = require('fs')

fs.rename('/Users/joe', '/Users/roger', err => {
  if (err) {
    console.error(err)
    return
  }
  //done
})`

const code6 = `const fs = require('fs')

try {
  fs.renameSync('/Users/joe', '/Users/roger')
} catch (err) {
  console.error(err)
}`

const code7 = `const fs = require('fs-extra')

const folder = '/Users/joe'

fs.remove(folder, err => {
  console.error(err)
})`

const code8 = `fs.remove(folder)
.then(() => {
  //done
})
.catch(err => {
  console.error(err)
})`

const code9 = `async function removeFolder(folder) {
  try {
    await fs.remove(folder)
    //done
  } catch (err) {
    console.error(err)
  }
}

const folder = '/Users/joe'
removeFolder(folder)`
export default{
  code1,
  code2,
  code3,
  code4,
  code5,
  code6,
  code7,
  code8,
  code9
}