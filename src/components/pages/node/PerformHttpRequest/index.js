import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class PerformHttpRequest extends Component {
  componentDidMount() {
    this.props.chooseItem('37')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>node中的http请求</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/making-http-requests-with-nodejs">https://nodejs.dev/learn/making-http-requests-with-nodejs</a></p>
          <h2>执行get请求</h2>
          <CodeEditor codeContent={codeAll.code1} height="560px"/>
          <h2>执行post请求</h2>
          <CodeEditor codeContent={codeAll.code2} height="810px"/>
          <h2>put和delete</h2>
          <p>put和delete请求和post请求的格式一样,只不过改了option.method的值</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/httpServer" chooseItem={() => this.props.chooseItem('36')}/>
          <NextPage url="/node/postRequest" chooseItem={() => this.props.chooseItem('38')}/>
        </div>
      </div>
    );
  }
}

export default PerformHttpRequest;