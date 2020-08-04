import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import { code1, code2, code3 } from './constants'
import eventLoop_1 from '../../../../images/eventLoop_1.png'
import eventLoop_2 from '../../../../images/eventLoop_2.png'
import eventLoop_3 from '../../../../images/eventLoop_3.png'
import eventLoop_4 from '../../../../images/eventLoop_4.png'
import eventLoop_5 from '../../../../images/eventLoop_5.png'
class EventLoop extends Component {
  componentDidMount() {
    this.props.chooseItem('28')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>node事件循环</h1>
        <div className='articleConent'>
          <h2>简介</h2>
          <p>事件循环是理解node最重要的概念之一</p>
          <p>为什么这么重要?因为它揭示了node为什么可以异步,非阻塞I/O.也解释了killer app(极度受欢迎的应用软件)
            这个使node如此成功的东西(我也不懂,就是直译)
          </p>
          <p>node是单线程,一次只能做一件事</p>
          <p>这个限制其实很有用,极大地简化了编程,无需担心并发问题</p>
          <p>你只需要注意代码,避免阻挠线程的东西,像同步的网络回调或者无限循环</p>
          <p>一般情况下,多数浏览器的每个标签都是一个事件循环,确保每个进程相互独立,避免网页陷入无限循环,
            或过重的进程阻断浏览器(直译)
          </p>
          <p>环境管理多个并发的事件循环,比如处理API调用.多线程也有自己的事件循环</p>
          <p>要特别注意的是在单个事件循环中写代码,不要阻断它</p>
          <h2>阻断事件循环</h2>
          <p>任何花费太长时间将控制权还给事件循环的js代码都会阻挠页面中js代码的执行,甚至包括UI线程.
            此时用户不能点击,不能滚动,不能做任何事情
          </p>
          <p>js中的I/O都是非阻塞的.网络请求,文件操作等.阻塞是特例,这也是为什么js基于如此多的回调,promise和async/await</p>
          <h2>回调栈</h2>
          <p>调用栈是一个LIFO对列(后进先出)</p>
          <p>事件循环会不停的检查调用栈看是否有需要执行的函数</p>
          <p>这么做会添加任何它找到的函数给调用栈,然后按顺序执行</p>
          <p>可能你很熟悉error栈追踪,在debugger或者浏览器的控制台.浏览器在调用栈中寻找函数名告知你当前调用哪个函数</p>
          <img style={{display: 'block', width: 800, height: 500}} src={eventLoop_1} alt=""/>
          <h2>一个简单的事件循环说明</h2>
          <p>例子</p>
          <CodeEditor codeContent={code1} height="200px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/Npx"  chooseItem={() => this.props.chooseItem('27')}/>
          <NextPage url="/node/NextTick"  chooseItem={() => this.props.chooseItem('29')}/>
        </div>
      </div>
    );
  }
}

export default EventLoop;