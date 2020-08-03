const code1 = '{}'

const code2 = `{
  "name": "test-project"
}`

const code3=`{
  "name": "test-project",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "main": "src/main.js",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit",
    "build": "node build/build.js"
  },
  "dependencies": {
    "vue": "^2.5.2"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-eslint": "^8.2.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-jest": "^21.0.2",
    "babel-loader": "^7.1.1",
    "babel-plugin-dynamic-import-node": "^1.2.0",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.26.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "eslint": "^4.15.0",
    "eslint-config-airbnb-base": "^11.3.0",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-import-resolver-webpack": "^0.8.3",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-vue": "^4.0.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "jest": "^22.0.4",
    "jest-serializer-vue": "^0.3.0",
    "node-notifier": "^5.1.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-jest": "^1.0.2",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"]
}`

const code4 = `"name": "test-project"`

const code5 = `{
  "author": "Joe <joe@whatever.com> (https://whatever.com)"
}`

const code6 = `{
  "author": {
    "name": "Joe",
    "email": "joe@whatever.com",
    "url": "https://whatever.com"
  }
}`

const code7=`{
  "contributors": ["Joe <joe@whatever.com> (https://whatever.com)"]
}`

const code8 = `{
  "contributors": [
    {
      "name": "Joe",
      "email": "joe@whatever.com",
      "url": "https://whatever.com"
    }
  ]
}`

const code9 = `{
  "bugs": "https://github.com/whatever/package/issues"
}`

const code10 = `{
  "homepage": "https://whatever.com/package"
}`

const code11 = `"version": "1.0.0"`

const code12 = `"license": "MIT"`

const code13 = `"keywords": [
  "email",
  "machine learning",
  "ai"
]`

const code14 = `"description": "A package to work with strings"`

const code15 = `"repository": "github:whatever/testing",`

const code16 = `"repository": "gitlab:whatever/testing",`

const code17 = `"repository": "bitbucket:whatever/testing",`

const code18 = `"repository": {
  "type": "git",
  "url": "https://github.com/whatever/testing.git"
}`

const code19 = `"repository": {
  "type": "svn",
  "url": "..."
}`

const code20 = `"main": "src/main.js"`

const code21 = `"private": true`

const code22 = `"scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "start": "npm run dev",
  "unit": "jest --config test/unit/jest.conf.js --coverage",
  "test": "npm run unit",
  "lint": "eslint --ext .js,.vue src test/unit",
  "build": "node build/build.js"
}`

const code23 = `npm install <PACKAGENAME>
yarn add <PACKAGENAME>`

const code24 = `"dependencies": {
  "vue": "^2.5.2"
}`

const code25 = `npm install --dev <PACKAGENAME>
yarn add --dev <PACKAGENAME>`

const code26 = `"devDependencies": {
  "autoprefixer": "^7.1.2",
  "babel-core": "^6.22.1"
}`

const code27 = `"engines": {
  "node": ">= 6.0.0",
  "npm": ">= 3.0.0",
  "yarn": "^0.13.0"
}`

const code28 = `"browserslist": [
  "> 1%",
  "last 2 versions",
  "not ie <= 8"
]`

export default {
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
  code13,
  code14,
  code15,
  code16,
  code17,
  code18,
  code19,
  code20,
  code21,
  code22,
  code23,
  code24,
  code25,
  code26,
  code27,
  code28,
}