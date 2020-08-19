import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import { code1, code2, code3, code4 } from './constants'
class UninstallPackage extends Component {
  componentDidMount() {
    this.props.chooseItem('24')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>卸载包</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/uninstalling-npm-packages">https://nodejs.dev/learn/uninstalling-npm-packages</a></p>
          <p>使用npm install 包名安装包后,可以这样卸载:</p>
          <CodeEditor codeContent={code1} height="40px"/>
          <p>使用-s, 或者--save,会从package.json文件中移除指针</p>
          <p>如果是开发依赖,要用-D/--save-dev符号:</p>
          <CodeEditor codeContent={code2} height="60px"/>
          <p>如果是全局的包,要-g/--global符号:</p>
          <CodeEditor codeContent={code3} height="40px"/>
          <p>例如:</p>
          <CodeEditor codeContent={code4} height="40px"/>
          <p>这条命令可以在任何地方运行,在哪个文件夹不重要</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/SemanticVersion" chooseItem={() => this.props.chooseItem('23')}/>
          <NextPage url="/node/GlobalOrlocally" chooseItem={() => this.props.chooseItem('25')}/>
        </div>
      </div>
    );
  }
}

export default UninstallPackage;