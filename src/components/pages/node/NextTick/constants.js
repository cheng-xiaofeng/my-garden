const code1 = `process.nextTick(() => {
  //do something
})`
const code2 = `const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
}

foo()
setTimeout(baz, 0)
process.nextTick(function() {
  console.log(111)
})`

const code3 = `foo
baz
111
should be right after baz, before bar
bar
baz`
export {
  code1,
  code2,
  code3
}