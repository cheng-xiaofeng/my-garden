const code1 = `{
  "dependencies": {
    "cowsay": "^1.3.1"
  }
}`

const code2 = `{
  "requires": true,
  "lockfileVersion": 1,
  "dependencies": {
    "cowsay": {
      "version": "1.3.1",
      "resolved": "https://registry.npmjs.org/cowsay/-/cowsay-1.3.1.tgz",
      "integrity": "sha512-3PVFe6FePVtPj1HTeLin9v8WyLl+VmM1l1H/5P+BTTDkMAjufp+0F9eLjzRnOHzVAYeIYFF5po5NjRrgefnRMQ==",
      "requires": {
        "get-stdin": "^5.0.1",
        "optimist": "~0.6.1",
        "string-width": "~2.1.1",
        "strip-eof": "^1.0.0"
      }
    }
  }
}`

const code3 = `npm install -g npm-check-updates`

const code4 = `ncu -u`

const code5 = `npm update`

const code6 = `npm install`

export default {
  code1,
  code2,
  code3,
  code4,
  code5,
  code6
}