import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>node简介</h1>
        <div className='articleConent'>
          <p>
            node.js是一个开源且跨平台的JavaScript运行环境.几乎所有项目都可以用得到
          </p>
          <p>
            node.js基于v8引擎,也就是Google chrome的核心,除了浏览器之外,这也使得node.js执行的速度非常快,且性能不俗
          </p>
          <p>
            node.js应用程序是单线程,不需要为每个请求都建立新的线程.在它的标准库里,node.js提供了一系列异步操作来阻止javascript
            程序阻塞,通常这些库都是遵循非阻塞的规范,从而使得阻塞成为例外而不是常态
          </p>
        </div>
      </div>
    )
  }
}
