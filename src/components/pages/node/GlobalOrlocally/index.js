import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import { code1, code2 } from './constants'
class GlobalOrlocally extends Component {
  componentDidMount() {
    this.props.chooseItem('25')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>全局包还是本地包</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/npm-global-or-local-packages">https://nodejs.dev/learn/npm-global-or-local-packages</a></p>
          <p>两者的不同:</p>
          <ul>
            <li>本地包是安装在运行npm install 包名 的目录下的node_modules文件夹</li>
            <li>全局包会放在一个地方(具体在取决于你的设置),不管你在哪运行npm install -g 包名</li>
          </ul>
          <p>你只能require本地的包:</p>
          <CodeEditor codeContent={code1} height="40px"/>
          <p>那么应该选择哪种方式呢?</p>
          <h2>通常,所有的包都应该安装到本地</h2>
          <p>这会确保不同的程序运行所需的不同版本的包</p>
          <p>升级全局包会导致所有的项目都是用最新的版本,后期维护会很麻烦,而且有一些包还会出现兼容性问题</p>
          <p>虽然所有项目都用本地包可能会出现资源浪费的情况,但跟可能的负面影响相比还是可以接受的</p>
          <p>一个包有可以在shell中执行的命令时,可以全局安装,跨项目使用</p>
          <p>本地安装也可以,然后用npx运行,但有些包还是全局更好一点</p>
          <p>以下这些包可以全局安装:</p>
          <ul>
            <li>npm</li>
            <li>create-react-app</li>
            <li>vue-cli</li>
            <li>grunt-cli</li>
            <li>mocha</li>
            <li>react-native-cli</li>
            <li>gatsby-cli</li>
            <li>forever</li>
            <li>nodemon</li>
          </ul>
          <p>可能你已经安装了一些全局的包.运行这个可以看到:</p>
          <CodeEditor codeContent={code2} height="40px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/UninstallPackage" chooseItem={() => this.props.chooseItem('24')}/>
          <NextPage url="/node/Dependencies" chooseItem={() => this.props.chooseItem('26')}/>
        </div>
      </div>
    );
  }
}

export default GlobalOrlocally;