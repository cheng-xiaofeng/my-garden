import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class AsyncFunction extends Component {
  componentDidMount() {
    this.props.chooseItem('34')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>Async and Await</h1>
        <div className='articleConent'>
          <h2>简介</h2>
          <p>js从回调函数进化到promises用了很短的时间,而es2017开始,有了async/await,异步就更简单了</p>
          <p>async函数是promise是和generator的结合,比promise更抽象一些:重复一遍:async/await是基于promise的</p>
          <h2>为什么引入async/await</h2>
          <p>他们减少了promise的样板和promise链的限制(不要打破链)</p>
          <p>es2015引入promise的时候,它们是用来解决异步问题的,它们也确实做到了.但是在es2015和es2017这两年间,
            发现promise并非最终的解决方案
          </p>
          <p>promises是为了解决回调地狱问题,但他们本身也很复杂,语法也复杂</p>
          <p>以他们为基础的更好的语法可以提供给开发者,时机一到,就有了Async函数</p>
          <p>它们让代码看上去是同步的,却真真实实是异步的</p>
          <h2>它是如何运作的?</h2>
          <p>async函数返回promise:</p>
          <CodeEditor codeContent={codeAll.code1} height="130px"/>
          <p>当你想调用这个函数时,预设一个await,代码会停止知道promise被resolve或reject.警告: 函数必须
            定义成Async:
          </p>
          <CodeEditor codeContent={codeAll.code2} height="80px"/>
          <h2>小例子:</h2>
          <p>这是一个Async/await异步运行函数的例子:</p>
          <CodeEditor codeContent={codeAll.code3} height="340px"/>
          <p>输出是:</p>
          <CodeEditor codeContent={codeAll.code4} height="80px"/>
          <h2>promises所有东西</h2>
          <p>在函数前面添加关键字async意味着这个函数会返回一个promise</p>
          <p>即使不用很明显的这么做,它都会返回promise</p>
          <p>所以下面的代码是合法的:</p>
          <CodeEditor codeContent={codeAll.code5} height="130px"/>
          <p>同样:</p>
          <CodeEditor codeContent={codeAll.code6} height="130px"/>
          <h2>代码可读性更强</h2>
          <p>你可以看到上面的例子,代码非常简单.和用链和回调函数的纯promises对比一下</p>
          <p>这是很简单的例子,当代码越复杂的时候,这种优势就越明显.</p>
          <p>这是个使用promises获取json资源,并解析:</p>
          <CodeEditor codeContent={codeAll.code7} height="260px"/>
          <p>使用async/await来实现:</p>
          <CodeEditor codeContent={codeAll.code8} height="280px"/>
          <h2>多个async函数</h2>
          <p>async函数链起来也很容易,比纯promises可读性更强:</p>
          <CodeEditor codeContent={codeAll.code9} height="560px"/>
          <p>打印出来是:</p>
          <CodeEditor codeContent={codeAll.code10} height="80px"/>
          <h2>更容易调试</h2>
          <p>调试promise比较难因为调试器在异步代码中不会停止</p>
          <p>async/await就简单了,因为在编译器这像是同步代码</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/promise" chooseItem={() => this.props.chooseItem('33')}/>
          <NextPage url="/node/eventEmitter" chooseItem={() => this.props.chooseItem('35')}/>
        </div>
      </div>
    );
  }
}

export default AsyncFunction;