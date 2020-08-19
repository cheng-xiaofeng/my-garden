import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import { code1, code2, code3, code4, code5 } from './constants'
class OldVersion extends Component {
  componentDidMount() {
    this.props.chooseItem('21')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>安装老版本的包</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/install-an-older-version-of-an-npm-package">https://nodejs.dev/learn/install-an-older-version-of-an-npm-package</a></p>
          <p>@语法可以安装老的包:</p>
          <CodeEditor codeContent={code1} height="40px"/>
          <p>比如:</p>
          <CodeEditor codeContent={code2} height="40px"/>
          <p>安装1.3.1版本(在输入此命令的时间段)</p>
          <p>安装1.2.0版本这样做:</p>
          <CodeEditor codeContent={code3} height="40px"/>
          <p>全局的包也一样:</p>
          <CodeEditor codeContent={code4} height="40px"/>
          <p>npm view 包名 versions会列出包的所有版本号:</p>
          <CodeEditor codeContent={code5} height="500px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/FindVersion/" chooseItem={() => this.props.chooseItem('20')}/>
          <NextPage url="/node/UpdateVersion" chooseItem={() => this.props.chooseItem('22')}/>
        </div>
      </div>
    );
  }
}

export default OldVersion;