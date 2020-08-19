import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class CallbackFunction extends Component {
  componentDidMount() {
    this.props.chooseItem('32')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>js异步编程和回调</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/javascript-asynchronous-programming-and-callbacks">https://nodejs.dev/learn/javascript-asynchronous-programming-and-callbacks</a></p>
          <h2>编程语言中的异步</h2>
          <p>计算机就是异步的</p>
          <p>异步就是程序可以独立于主程序流发生</p>
          <p>目前的电脑,每个程序都在一个时间空档运行,然后停止执行让其他的程序继续.这件事运行的非常快很难注意到,
            我们就以为电脑同时在运行很多程序,但这是幻觉(除了多重处理器的机器)
          </p>
          <p>程序内部使用中断机制,处理器会触发一个信号获取系统的注意</p>
          <p>我不会进入这种机制内部,但是记住程序异步,中止执行除非它需要被系统注意到,同时允许电脑做其他的事是很正常的.
            当程序等待从网络中的响应时,不会终止程序直到请求完成
          </p>
          <p>通常,编程语言都是同步的,它会提供一种方法来管理异步,或者通过库来管理. C, Java, C#, PHP, Go, Ruby, 
            Swift, and Python都是同步的.他们中有些会用线程来处理异步,建一个新的进程</p>
          <h2>JavaScript</h2>
          <p>JavaScript是同步且单线程的,这意味着它不能建立新的线程来同时运行</p>
          <p>代码会一行接一行按顺序执行</p>
          <CodeEditor codeContent={codeAll.code1} height="130px"/>
          <p>js是在浏览器内诞生的,主要工作是响应用户的操作,比如onClick,onMouseOver,onChange,onSubmit等.
            它是怎么考同步编程模型做大这些的?
          </p>
          <p>答案是环境.浏览器提供了一系列API来处理这些功能</p>
          <p>最近,node也引进了非阻塞I/O环境继承了这个概念来访问文件,网路请求等</p>
          <h2>回调函数</h2>
          <p>你不知道用户什么时候回点击按钮.所以你给点击事件定义了一个事件句柄.这个事件句柄接受一个函数,
            当事件被触发时就会调用
          </p>
          <CodeEditor codeContent={codeAll.code2} height="100px"/>
          <p>这就是回调函数</p>
          <p>回调函数就是一个普通的函数作为值传个另一个函数,只有在事件发生的时候才会执行.js拥有一等公民-函数,所以我们
            可以这么做,它可以赋值给变量,然后传给其他函数(叫高阶函数)
          </p>
          <p>将客户端代码放到window对象的load事件监听中是很常见的,当页面准备好的时候就会运行回调函数:</p>
          <CodeEditor codeContent={codeAll.code3} height="120px"/>
          <p>回调函数随处可见,并不只是DOM事件</p>
          <p>另一个很常见的例子就是定时器:</p>
          <CodeEditor codeContent={codeAll.code4} height="80px"/>
          <p>XHR请求也接受一个回调函数,在这个例子中,将函数付给一个属性,当特定的事件发生时就会被调用(这里是请求状态的改变)</p>
          <CodeEditor codeContent={codeAll.code5} height="240px"/>
          <h2>回调函数中处理错误</h2>
          <p>回调函数怎么处理错误?最常见的就是使用node做采用的方法:回调函数的第一个参数是error对象:错误优先回调</p>
          <p>没有错误,对象就是null.有错误,它就会包含一个错误的描述和其他信息:</p>
          <CodeEditor codeContent={codeAll.code6} height="260px"/>
          <h2>回调函数的问题</h2>
          <p>在简单的环境中,回调函数很棒</p>
          <p>然而每个回调都会增加以及嵌套,当有很多回调时,代码就变得很是复杂</p>
          <CodeEditor codeContent={codeAll.code7} height="260px"/>
          <p>这仅仅只是个4级嵌套,还有更多的呢</p>
          <p>怎么解决这个情况呢?</p>
          <h2>回调函数的替代选择</h2>
          <p>es6开始,js引入了几个解决异步问题的新特性:Promises和Async/Await</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/Timer" chooseItem={() => this.props.chooseItem('31')}/>
          <NextPage url="/node/promise" chooseItem={() => this.props.chooseItem('33')}/>
        </div>
      </div>
    );
  }
}

export default CallbackFunction;