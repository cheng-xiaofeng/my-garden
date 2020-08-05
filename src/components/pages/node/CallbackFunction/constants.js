const code1 = `const a = 1
const b = 2
const c = a * b
console.log(c)
doSomething()`

const code2 = `document.getElementById('button').addEventListener('click', () => {
  //item clicked
})`

const code3 = `window.addEventListener('load', () => {
  //window loaded
  //do what you want
})`

const code4 = `setTimeout(() => {
  // runs after 2 seconds
}, 2000)`

const code5 = `const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    xhr.status === 200 ? console.log(xhr.responseText) : console.error('error')
  }
}
xhr.open('GET', 'https://yoursite.com')
xhr.send()`

const code6 = `fs.readFile('/file.json', (err, data) => {
  if (err !== null) {
    //handle error
    console.log(err)
    return
  }

  //no errors, process data
  console.log(data)
})`

const code7 = `window.addEventListener('load', () => {
  document.getElementById('button').addEventListener('click', () => {
    setTimeout(() => {
      items.forEach(item => {
        //your code here
      })
    }, 2000)
  })
})`

export default {
  code1,
  code2,
  code3,
  code4,
  code5,
  code6,
  code7,
}