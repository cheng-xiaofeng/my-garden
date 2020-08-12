import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import { code1, code2 } from './constants'
class WherePackages extends Component {
  componentDidMount() {
    this.props.chooseItem('16')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>npm从哪里安装包</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank" href="https://nodejs.dev/learn/where-does-npm-install-the-packages">https://nodejs.dev/learn/where-does-npm-install-the-packages</a></p>
          <p>npm安装包有两种方式:</p>
          <ul>
            <li>本地安装</li>
            <li>全局安装</li>
          </ul>
          <p>一般,你会这样做:</p>
          <CodeEditor codeContent={code1} height="40px"/>
          <p>这个包就会被安装到当前的文档树,在node_modules的子文件夹</p>
          <p>此操作发生时,npm也会在package.json文件的dependencies属性添加lodash的入口</p>
          <p>全局安装要用-g标识符:</p>
          <CodeEditor codeContent={code2} height="40px"/>
          <p>此操作发生时,npm不会在当前文件夹下安装包,会在一个全局的位置安装</p>
          <p>这是为什么呢?</p>
          <p>npm的-g命令会告诉你具体位置在哪</p>
          <p>macOS和Linux是/usr/local/lib/node_modules,Windows是 C:\Users\YOU\AppData\Roaming\npm\node_modules</p>
          <p>如果你用nvm管理node版本,位置就不一样了</p>
          <p>以我为例,我的是/Users/joe/.nvm/versions/node/v8.9.0/lib/node_modules.</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/introductionOfNpm" chooseItem={() => this.props.chooseItem('15')}/>
          <NextPage url="/node/executePackage" chooseItem={() => this.props.chooseItem('17')}/>
        </div>
      </div>
    );
  }
}

export default WherePackages;