import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class HandlingError extends Component {
  componentDidMount() {
    this.props.chooseItem('54')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>错误处理</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank" href="https://nodejs.dev/learn/error-handling-in-nodejs">https://nodejs.dev/learn/error-handling-in-nodejs</a></p>
          <p>node中的错误是通过异常处理的</p>
          <h2>创建异常</h2>
          <p>通过throw关键字创建异常:</p>
          <CodeEditor codeContent={codeAll.code1} height="40px"/>
          <p>一旦js执行这一行,正常的程序流就会停止,控制就会到最近的异常处理程序</p>
          <p>通常客户端的代码值可以是任何js值,包括字符串,数字和对象</p>
          <p>node中,不会抛出字符串,只抛出error对象</p>
          <h2>Error对象</h2>
          <p>error对象要么是Error对象的实例,要么是继承自Error类,由<a target="_blank" href="https://nodejs.org/api/errors.html">Error
            核心模块</a>提供
          </p>
          <CodeEditor codeContent={codeAll.code2} height="40px"/>
          <p>或者</p>
          <CodeEditor codeContent={codeAll.code3} height="110px"/>
          <h2>处理异常</h2>
          <p>异常处理程序就是try/catch语句</p>
          <p>任何代码中的异常包括try区域的异常都会在相应的catch区域处理</p>
          <CodeEditor codeContent={codeAll.code4} height="80px"/>
          <p>e代表的就是异常值</p>
          <p>可以加很多处理程序,这样就可以捕捉不同的错误</p>
          <h2>捕捉未捕获到的异常</h2>
          <p>在程序执行中有未捕获到的异常抛出时,程序就崩了</p>
          <p>为了解决这个问题,在process对象中监听uncaughtException事件:</p>
          <CodeEditor codeContent={codeAll.code5} height="100px"/>
          <p>不用引进process核心模块,会自动注入</p>
          <h2>promises中的异常</h2>
          <p>promises可以链不同的操作,然后在最后处理错误:</p>
          <CodeEditor codeContent={codeAll.code6} height="100px"/>
          <p>那你怎么知道错误发生的位置呢?你不用知道,可以在每个回调函数(doSomethingX)内处理错误,
            然后再抛出新的错误,就会被外部的catch捕捉到
          </p>
          <CodeEditor codeContent={codeAll.code7} height="260px"/>
          <p>为了局部处理错误而不是在我们的回调中处理,我们可以打破链结构,在每个then方法里面建一个函数来说胡成立错误:</p>
          <CodeEditor codeContent={codeAll.code8} height="350px"/>
          <h2>async/await中处理错误</h2>
          <p>async.await这么来做</p>
          <CodeEditor codeContent={codeAll.code9} height="200px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/environmentDiffrence" chooseItem={() => this.props.chooseItem('53')}/>
          <NextPage url="/node/logObject" chooseItem={() => this.props.chooseItem('55')}/>
        </div>
      </div>
    );
  }
}

export default HandlingError;