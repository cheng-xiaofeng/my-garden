import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import { code1, code2, code3, code4, code5 } from './constants'
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
          <img style={{display: 'block', width: 600, height: 500}} src={eventLoop_1} alt=""/>
          <h2>一个简单的事件循环说明</h2>
          <p>例子</p>
          <CodeEditor codeContent={code1} height="300px"/>
          <p>这段代码运行时,foo()最先被调用.foo()函数内部,先调用bar(),再调用baz()</p>
          <p>回调栈看上去是这个样子的:</p>
          <img style={{display: 'block', width: 800, height: 800}} src={eventLoop_2} alt=""/>
          <p>每次迭代中,事件循环都会看调用栈中是否有东西,有就执行:</p>
          <img style={{display: 'block', width: 600, height: 800}} src={eventLoop_3} alt=""/>
          <p>知道调用栈是空的</p>
          <h2>排队函数执行(直译,难听.函数排队执行更好听)</h2>
          <p>上面的例子很平常,没什么特别:js找到东西执行,然后运行</p>
          <p>我们来看看怎么推迟函数知道栈被清空</p>
          <p>使用setTimeout(() =&gt; {}, 0),会调用一个函数,但是会在其他函数都执行之后在执行</p>
          <p>看这个例子:</p>
          <CodeEditor codeContent={code2} height="300px"/>
          <p>这段代码会打印出:</p>
          <CodeEditor codeContent={code3} height="80px"/>
          <p>先是foo()被调用,foo里面,先调用setTimeout,bar作为参数传入,我们希望它尽快执行,所以传0给定时器
            然后调用baz()
          </p>
          <p>这个时候调用栈像这个样子:</p>
          <img style={{display: 'block', width: 800, height: 800}} src={eventLoop_4} alt=""/>
          <p>这是函数的执行顺序:</p>
          <img style={{display: 'block', width: 600, height: 800}} src={eventLoop_5} alt=""/>
          <p>为什么会这样?</p>
          <h2>消息队列</h2>
          <p>当setTimeout被调用时,浏览器或者node会启动定时器.一旦定时器到期,这个例子中有0秒的暂停,回调函数就被放到消息队列</p>
          <p>消息队列在用户发起事件的时候也存在,像点击或者键盘事件.还有,取得响应但在做出反应之前也是队列,DOM事件也是,比如onload</p>
          <p>循环会给调用栈优先权,会先处理在调用栈中的东西,当调用栈没有东西,才回去找消息队列</p>
          <p>我们不会去等待像setTimeout,fetch这样的函数,因为他们是浏览器提供的,有自己的线程.
            例如,设置两个setTimeout,暂停时间为2秒,你不是一定会等2秒,等待是在别处的
          </p>
          <h2>es6工作队列</h2>
          <p>es6引入了工作队列的概念,被promise所使用.它是尽快执行异步函数结果的方法,而不是放到调用栈的最后</p>
          <p>当前函数结束之前resolve的promise会跟随在当前函数之后执行</p>
          <p>就像坐过山车一样:消息队列把你放到队伍的最后,你只能慢慢的去等;而工作队列是快速通道,在你结束前一次后
            让你再坐一次
          </p>
          <p>例子:</p>
          <CodeEditor codeContent={code4} height="360px"/>
          <p>结果是:</p>
          <CodeEditor codeContent={code5} height="100px"/>
          <p>promise(async/await)和通过setTimeout()的普通函数是有很大不同的</p>
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