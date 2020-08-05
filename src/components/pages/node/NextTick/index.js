import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import { code1, code2, code3 } from './constants'
class NextTick extends Component {
  componentDidMount() {
    this.props.chooseItem('29')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>理解process.nextTick()</h1>
        <div className='articleConent'>
          <p>理解node的事件循环,proces.nextTick是很重要的一环</p>
          <p>事件循环完整的走一遍就是一个tick</p>
          <CodeEditor codeContent={code2} height="460px"/>
          <p>结果是:</p>
          <CodeEditor codeContent={code3} height="160px"/>
          <p>也就是说,一个tick是调用栈执行一次,跟工作队列和消息队列没有关系</p>
          <p>传个函数给process.nextTick,是告诉引擎在当前操作之后下一个事件循环开始之前触发</p>
          <CodeEditor codeContent={code1} height="80px"/>
          <p>事件循环会一直忙于处理当前的函数</p>
          <p>当这个操作结束后,js引擎会运行传给nextTick的所有函数</p>
          <p>这是我们告诉js引擎异步处理函数(在当前函数之后),尽快,而不是排队</p>
          <p>setTimeout会在下一个tick结束后执行函数,比nextTick要晚多了,nextTick会提升这个回调的优先权
            在下一个tick之前执行
          </p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/EventLoop" chooseItem={() => this.props.chooseItem('28')}/>
          <NextPage url="/node/SetImmediate" chooseItem={() => this.props.chooseItem('30')}/>
        </div>
      </div>
    );
  }
}

export default NextTick;