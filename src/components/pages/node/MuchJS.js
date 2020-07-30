import React, { Component } from 'react'
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../commonComponents'
export default class MuchJS extends Component {
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>学习node.js你需要知道多少JavaScript?</h1>
        <div className='articleConent'>
          <p>作为初学者,你很难get到你对自己的编程能力有多少信心</p>
          <p>写代码的时候,也许你会困惑JavaScript在哪里结束,node.js在哪里开始.反之亦然</p>
          <p>进入node.js之前,我觉得你要对JavaScript的主要概念有一个比较好的理解:</p>
          <ul>
            <li>Lexical Structure(关键字?)</li>
            <li>Expressions(表达式)</li>
            <li>Types(类型)</li>
            <li>Variables(变量)</li>
            <li>Functions(函数)</li>
            <li>this</li>
            <li>Arrow Functions(箭头函数)</li>
            <li>Loops(循环)</li>
            <li>Scopes(作用域)</li>
            <li>Arrays(数组)</li>
            <li>Template Literals(模板字符串)</li>
            <li>Semicolons(分号)</li>
            <li>Strict Mode(严格模式)</li>
            <li>ECMAScript 6, 2016, 2017</li>
          </ul>
          <p>如果你理解以上概念,你就是个熟练地JavaScript开发者,无论是浏览器端还是node.js端</p>
          <p>下面这些概念是理解异步编程的关键,也是node.js的基础部分</p>
          <ul>
            <li>Asynchronous programming and callbacks(异步编程与回调)</li>
            <li>Timers(定时器)</li>
            <li>Promises</li>
            <li>Async and Await</li>
            <li>Closures(闭包)</li>
            <li>The Event Loop(事件循环)</li>
          </ul>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/installNode" chooseItem={() => this.props.chooseItem('3')}/>
          <NextPage url="/node/diffrences" chooseItem={() => this.props.chooseItem('5')}/>
        </div>
      </div>
    )
  }
}
