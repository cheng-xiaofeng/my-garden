import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class EventsModule extends Component {
  componentDidMount() {
    this.props.chooseItem('49')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>事件模块</h1>
        <div className='articleConent'>
          <p>事件模块有一个EventEmitter类,是使用事件模块的关键</p>
          <CodeEditor codeContent={codeAll.code1} height="60px"/>
          <p>事件模块是自产自用(直译为吃自己的狗粮),使用这些事件: </p>
          <ul>
            <li>newListener 添加一个监听事件</li>
            <li>removeListener 移除一个监听事件</li>
          </ul>
          <h2>emitter.addListener()</h2>
          <p>emitter.on()的另一个名字</p>
          <h2>emitter.emit()</h2>
          <p>触发一个事件.按事件监听注册的顺序依次调用事件监听</p>
          <CodeEditor codeContent={codeAll.code2} height="40px"/>
          <h2>emitter.eventNames()</h2>
          <p>返回一个元素为字符串的数组,代表在当前EventEmitter对象中注册的事件</p>
          <CodeEditor codeContent={codeAll.code3} height="40px"/>
          <h2>emitter.getMaxListeners()</h2>
          <p>获取EventEmtter对象中可以添加监听的最大数值,默认是10,但可以用setMaxListeners()增加或减少</p>
          <CodeEditor codeContent={codeAll.code4} height="40px"/>
          <h2>emitter.listenerCount()</h2>
          <p>获取到事件的监听数量,事件作为参数传入:</p>
          <CodeEditor codeContent={codeAll.code5} height="40px"/>
          <h2>emitter.listeners()</h2>
          <p>获取到事件监听的数组,事件作为参数传入:</p>
          <CodeEditor codeContent={codeAll.code6} height="40px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/osModule" chooseItem={() => this.props.chooseItem('48')}/>
          <NextPage url="/node/httpModule" chooseItem={() => this.props.chooseItem('50')}/>
        </div>
      </div>
    );
  }
}

export default EventsModule;