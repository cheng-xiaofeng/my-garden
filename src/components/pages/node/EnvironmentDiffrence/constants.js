const code1 = `export NODE_ENV=production`

const code2 = `NODE_ENV=production node app.js`

const code3 = `if (process.env.NODE_ENV === "development") {
  //...
}
if (process.env.NODE_ENV === "production") {
  //...
}
if(['production', 'staging'].indexOf(process.env.NODE_ENV) >= 0) {
  //...
})`

const code4 = `if (process.env.NODE_ENV === "development") {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
})

if (process.env.NODE_ENV === "production") {
  app.use(express.errorHandler())
})`

export default{
  code1,
  code2,
  code3,
  code4,

}