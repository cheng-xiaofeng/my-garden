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
          <h2>emitter.off()</h2>
          <p>node 10中添加的emitter.removeListener的别名</p>
          <h2>emitter.on()</h2>
          <p>当一个事件被触发的时候被调用的回调函数:</p>
          <CodeEditor codeContent={codeAll.code7} height="80px"/>
          <h2>emitter.once()</h2>
          <p>被注册是事件第一次被触发后调用的回调函数.此回调函数只被调用一次</p>
          <CodeEditor codeContent={codeAll.code8} height="150px"/>
          <h2>emitter.prependListener()</h2>
          <p>当你用on或者addListener添加监听时,会被添加到最后并且最后才被调用.使用这个方法就可以添加在其他的监听前边,
            也会在其他监听之前被调用
          </p>
          <h2>emitter.prependOnceListener()</h2>
          <p>跟上边一样,只不过被调用一次</p>
          <h2>emitter.removeAllListeners()</h2>
          <p>移除一个EventEmitter对象中对某个特定事件的所有监听</p>
          <CodeEditor codeContent={codeAll.code9} height="40px"/>
          <h2>emitter.removeListener()</h2>
          <p>移除一个特定的事件监听.可以将一个回调函数赋值给一个变量,添加的时候可以指向它:</p>
          <CodeEditor codeContent={codeAll.code10} height="80px"/>
          <h2>emitter.setMaxListeners()</h2>
          <p>设置EventEmitter对象中可以添加监听的最大数,默认是10,可以增加或减少</p>
          <CodeEditor codeContent={codeAll.code11} height="40px"/>
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