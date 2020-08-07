const code1 = `const path = require('path')`

const code2 = `const notes = '/users/joe/notes.txt'

path.dirname(notes) // /users/joe
path.basename(notes) // notes.txt
path.extname(notes) // .txt`

const code3 = `path.basename(notes, path.extname(notes)) //notes`

const code4 = `const name = 'joe'
path.join('/', 'users', name, 'notes.txt') //'/users/joe/notes.txt'`

const code5 = `path.resolve('joe.txt') //'/Users/joe/joe.txt' if run from my home folder`

const code6 = `path.resolve('tmp', 'joe.txt') //'/Users/joe/tmp/joe.txt' if run from my home folder`

const code7 = `path.resolve('/etc', 'joe.txt') //'/etc/joe.txt'`

const code8 = `path.normalize('/users/joe/..//test.txt') ///users/test.txt`
export default{
  code1, 
  code2, 
  code3,
  code4,
  code5,
  code6,
  code7,
  code8
}