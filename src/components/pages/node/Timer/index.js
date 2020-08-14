import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
import timer_1 from '../../../../images/timer_1.png'
import timer_2 from '../../../../images/timer_2.png'
import timer_3 from '../../../../images/timer_3.png'
import timer_4 from '../../../../images/timer_4.png'
class Timer extends Component {
  componentDidMount() {
    this.props.chooseItem('31')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>js定时器</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank" href="https://nodejs.dev/learn/discover-javascript-timers">https://nodejs.dev/learn/discover-javascript-timers</a></p>
          <h2>setTimeout</h2>
          <p>写js的时候,你可能会想延迟某个函数的执行</p>
          <p>这就是setTimeout的动作,传一个稍后执行的回调函数,一个时间参数代表多久以后执行,毫秒级:</p>
          <CodeEditor codeContent={codeAll.code1} height="200px"/>
          <p>这种写法定义新的函数.你可以调任何你想调的函数,或者传一个已经存在的函数,和一组参数:</p>
          <CodeEditor codeContent={codeAll.code2} height="180px"/>
          <p>setTimeout返回一个定时器id,通常是用不到的,但可以存起来,想删除这个预定的函数执行的时候可以清除掉:</p>
          <CodeEditor codeContent={codeAll.code3} height="160px"/>
          <h2>0延迟</h2>
          <p>设置时间参数为0,回调函数会尽快执行,但也会在当前函数结束之后:</p>
          <CodeEditor codeContent={codeAll.code4} height="140px"/>
          <p>将会打印before after</p>
          <p>这会很有用在防止阻塞CPU在处理密集型任务的时候,通过将函数排在调度器中,需要重度运算的函数先执行</p>
          <p>注意:有些浏览器会设置setImmediate方法实现同样的效果,但并不是通用标准,
            <a target="_blank" href="https://caniuse.com/#feat=setimmediate">其他浏览器中不可行</a>,但在node中可以
          </p>
          <h2>setInterval()</h2>
          <p>setInterval和setTimeout类似,不同之处在与会相隔特定的时间一直执行回调函数,而不是只执行一次:</p>
          <CodeEditor codeContent={codeAll.code5} height="80px"/>
          <p>函数没2秒执行一次,除非你告诉他停止,把setInterval返回的id传给clearInterval:</p>
          <CodeEditor codeContent={codeAll.code6} height="140px"/>
          <p>在setInterval内部的回调函数中调用clearInterval很常见,这可以让它自己决定是该继续还是停止.比如下面
            这个例子,当App.somethingIWait的值是'arrived'时候会停止
          </p>
          <CodeEditor codeContent={codeAll.code7} height="200px"/>
          <h2>递归setTimeout</h2>
          <p>setInterval每个n毫秒就执行一次函数,不考虑什么时候结束</p>
          <p>如果一个函数总是花相同的时间,那无所谓:</p>
          <img style={{display:'block', width:600, height:120}} src={timer_1} alt=""/>
          <p>也许需要不同的执行时间,取决于网络条件:</p>
          <img style={{display:'block', width:600, height:120}} src={timer_2} alt=""/>
          <p>也许有一次执行跟下一个执行重叠了:</p>
          <img style={{display:'block', width:600, height:120}} src={timer_3} alt=""/>
          <p>为了避免这个情况,设置一个递归的setTimeout,回调函数结束时调用:</p>
          <CodeEditor codeContent={codeAll.code8} height="220px"/>
          <p>现在是这个样子:</p>
          <img style={{display:'block', width:600, height:120}} src={timer_4} alt=""/>
          <p><a target="_blank" href="https://nodejs.org/api/timers.html">定时器模块</a>有setTimeout和setInterval</p>
          <p>node中还有setImmediate(),和setTimeout(() =&gt; {}, 0)效果一样,通常和事件循环一起使用</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/SetImmediate" chooseItem={() => this.props.chooseItem('30')}/>
          <NextPage url="/node/callback" chooseItem={() => this.props.chooseItem('32')}/>
        </div>
      </div>
    );
  }
}

export default Timer;