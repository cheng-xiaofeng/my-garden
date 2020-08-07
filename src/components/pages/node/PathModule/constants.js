const code1 = `const path = require('path')`

const code2 = `require('path').basename('/test/something') //something
require('path').basename('/test/something.txt') //something.txt
require('path').basename('/test/something.txt', '.txt') //something`

const code3 = `require('path').dirname('/test/something') // /test
require('path').dirname('/test/something/file.txt') // /test/something`

const code4 = `require('path').extname('/test/something') // ''
require('path').extname('/test/something/file.txt') // '.txt'`

const code5 = `require('path').isAbsolute('/test/something') // true
require('path').isAbsolute('./test/something') // false`

const code6 = `const name = 'joe'
require('path').join('/', 'users', name, 'notes.txt') //'/users/joe/notes.txt'`

const code7 = `require('path').normalize('/users/joe/..//test.txt') //'/users/test.txt'`

const code8 = `require('path').parse('/users/test.txt')`

const code9 = `{
  root: '/',
  dir: '/users',
  base: 'test.txt',
  ext: '.txt',
  name: 'test'
}`

const code10 = `require('path').relative('/Users/joe', '/Users/joe/test.txt') //'test.txt'
require('path').relative('/Users/joe', '/Users/joe/something/test.txt') //'something/test.txt'`

const code11 = `path.resolve('joe.txt') //'/Users/joe/joe.txt' if run from my home folder`

const code12 = `path.resolve('tmp', 'joe.txt') //'/Users/joe/tmp/joe.txt' if run from my home folder`

const code13 = `path.resolve('/etc', 'joe.txt') //'/etc/joe.txt'`

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
  code13
}