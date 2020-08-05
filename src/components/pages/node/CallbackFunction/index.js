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
          <CodeEditor codeContent={codeAll.code1} height="120px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/Timer" chooseItem={() => this.props.chooseItem('31')}/>
          <NextPage url="/node/PromiseFunction" chooseItem={() => this.props.chooseItem('33')}/>
        </div>
      </div>
    );
  }
}

export default CallbackFunction;