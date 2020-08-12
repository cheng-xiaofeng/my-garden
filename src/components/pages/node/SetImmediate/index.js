import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import { code1 } from './constants'
class SetImmediate extends Component {
  componentDidMount() {
    this.props.chooseItem('30')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>理解setImmediate()</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank" href="https://nodejs.dev/learn/understanding-setimmediate">https://nodejs.dev/learn/understanding-setimmediate</a></p>
          <p>当你想尽快的执行一些异步代码时,可以选择setImmediate()</p>
          <CodeEditor codeContent={code1} height="80px"/>
          <p>传递给setImmediate()的回调函数会在下一个事件循环的迭代中执行</p>
          <p>setImmediate和setTimeout(时间参数为0),process.nextTick的区别是什么?</p>
          <p>传给process.nextTick()的函数会在当前迭代,当前操作完成后执行;这就是说它永远会在setImmediate
            和setTimeout之前执行
          </p>
          <p>时间参数为0的setTimeout和setImmediate很像,他们的执行顺序受很多因素影响,但都会在下一个
            事件循环的迭代中执行
          </p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/NextTick" chooseItem={() => this.props.chooseItem('29')}/>
          <NextPage url="/node/Timer" chooseItem={() => this.props.chooseItem('31')}/>
        </div>
      </div>
    );
  }
}

export default SetImmediate;