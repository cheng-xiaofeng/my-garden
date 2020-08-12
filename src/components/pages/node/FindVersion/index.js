import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import { code1, code2, code3, code4, code5, code6 } from './constants'
class FindVersion extends Component {
  componentDidMount() {
    this.props.chooseItem('20')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>找到已安装包的版本</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank" href="https://nodejs.dev/learn/find-the-installed-version-of-an-npm-package">https://nodejs.dev/learn/find-the-installed-version-of-an-npm-package</a></p>
          <p>查看所有包的最新版本一级他们的依赖:</p>
          <CodeEditor codeContent={code1} height="40px"/>
          <p>例如:</p>
          <CodeEditor codeContent={code2} height="300px"/>
          <p>你也可以打开package-lock.json,不过这需要你用眼睛去看了</p>
          <p>npm list -g是一样的,只不过是全局的包</p>
          <p>使用npm list --depth=0, 只获取最顶层的包(一般就是陈列在package.json的包)</p>
          <CodeEditor codeContent={code3} height="80px"/>
          <p>也可以添加名称获取这个包的版本:</p>
          <CodeEditor codeContent={code4} height="80px"/>
          <p>对包的依赖也同样有效:</p>
          <CodeEditor codeContent={code5} height="130px"/>
          <p>如果你想知道npm仓库中包的最新版本,运行 npm view 包名 version:</p>
          <CodeEditor codeContent={code6} height="80px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/PackageLockJson" chooseItem={() => this.props.chooseItem('19')}/>
          <NextPage url="/node/OldVersion" chooseItem={() => this.props.chooseItem('21')}/>
        </div>
      </div>
    );
  }
}

export default FindVersion;