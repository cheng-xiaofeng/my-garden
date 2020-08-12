import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class EventEmitter extends Component {
  componentDidMount() {
    this.props.chooseItem('35')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>node事件触发</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank" href="https://nodejs.dev/learn/the-nodejs-event-emitter">https://nodejs.dev/learn/the-nodejs-event-emitter</a></p>
          <p>如果你写过浏览器的js,你就知道用户通过事件来交互有多频繁:鼠标点击,按键盘,鼠标移动等</p>
          <p>在后端,node的<a target="_blank" href="https://nodejs.org/api/events.html">event module</a>提供了类似的机制</p>
          <p>这个模块有个EventEmitter类,我们可以用来处理事件</p>
          <p>初始化是这样的:</p>
          <CodeEditor codeContent={codeAll.code1} height="60px"/>
          <p>这个对象抛出很多方法,其中两个是on和emit:</p>
          <ul>
            <li>emit用来触发事件</li>
            <li>on用来添加一个回调函数,当时间被触发的时候就会被执行</li>
          </ul>
          <p>例如,我们创建一个start事件,一个小样本,仅仅只是打印在控制台</p>
          <CodeEditor codeContent={codeAll.code2} height="80px"/>
          <p>当我们运行:</p>
          <CodeEditor codeContent={codeAll.code3} height="40px"/>
          <p>当事件处理程序函数被触发时,我们就得到一个console log</p>
          <p>通过给emit()添加额外的参数这种方式可以给事件处理程序传递参数</p>
          <CodeEditor codeContent={codeAll.code4} height="140px"/>
          <p>多个参数:</p>
          <CodeEditor codeContent={codeAll.code5} height="140px"/>
          <p>EventEmitter也有其他的方法和事件交互,比如:</p>
          <ul>
            <li>once(): 添加一个一次监听</li>
            <li>removeListener() / off(): 移除事件监听</li>
            <li>removeAllListeners(): 移除所有时间监听</li>
          </ul>
          <p><a target="_blank" href="https://nodejs.org/api/events.html">这里</a>可以获取到更多的细节</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/async" chooseItem={() => this.props.chooseItem('34')}/>
          <NextPage url="/node/httpServer" chooseItem={() => this.props.chooseItem('36')}/>
        </div>
      </div>
    );
  }
}

export default EventEmitter;