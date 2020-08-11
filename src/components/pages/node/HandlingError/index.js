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
          <p>node中的错误是通过异常处理的</p>
          <h2>创建异常</h2>
          <p>通过throw关键字创建异常:</p>
          <CodeEditor codeContent={codeAll.code1} height="40px"/>
          <p>一旦js执行这一行,正常的程序流就会停止,控制就会到最近的异常处理程序</p>
          <p>通常客户端的代码值可以是任何js值,包括字符串,数字和对象</p>
          <p>node中,不会抛出字符串,只抛出error对象</p>
          <h2>Error对象</h2>
          <p>error对象要么是Error对象的实例,要么是继承自Error类,由<a href="https://nodejs.org/api/errors.html">Error
            核心模块</a>提供
          </p>
          <CodeEditor codeContent={codeAll.code2} height="40px"/>
          <p>或者</p>
          <CodeEditor codeContent={codeAll.code3} height="110px"/>
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