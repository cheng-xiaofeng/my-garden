const code1 = 'npm install'

const code2 = 'npm install <package-name>'

const code3 = 'npm update'

const code4 = 'npm update <package-name>'

const code5 = 'npm run <task-name>'

const code6 = `{
  "scripts": {
    "start-dev": "node lib/server-development",
    "start": "node lib/server-production"
  },
}`

const code7 = `{
  "scripts": {
    "watch": "webpack --watch --progress --colors --config webpack.conf.js",
    "dev": "webpack --progress --colors --config webpack.conf.js",
    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js",
  },
}`

const code8 = `$ npm run watch
$ npm run dev
$ npm run prod`

export {
  code1,
  code2,
  code3,
  code4,
  code5,
  code6,
  code7,
  code8
}