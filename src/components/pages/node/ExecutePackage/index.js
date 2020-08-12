import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import { code1, code2, code3 } from './constants'
class ExecutePackage extends Component {
  componentDidMount() {
    this.props.chooseItem('17')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>如何使用或者执行一个包</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank" href="https://nodejs.dev/learn/how-to-use-or-execute-a-package-installed-using-npm">https://nodejs.dev/learn/how-to-use-or-execute-a-package-installed-using-npm</a></p>
          <p>当你用npm安装包之后,你怎么在node中使用呢?</p>
          <p>比如你安装了lodash,很实用的js库:</p>
          <CodeEditor codeContent={code1} height="40px"/>
          <p>这会在本地node_modules下安装一个包</p>
          <p>要是用它,就要把它引入进去:</p>
          <CodeEditor codeContent={code2} height="40px"/>
          <p>如果你的包可执行,就会把执行文件放在node_modules/.bin/下</p>
          <p>论证这一点最简单的简单的方式就是<a target="_blank" href="https://www.npmjs.com/package/cowsay">cowsay</a></p>
          <p>cowsay包有一个命令可以让一直牛说点什么(或者其他动物)</p>
          <p>当你安装cowsay是,它会自己在node_modules文件夹安装一些依赖</p>
          <p>有一个隐藏的.bin文件夹,包含一些cowsay二进制的链接</p>
          <p>怎么执行呢?</p>
          <p>你可以输入./node_modules/.bin/cowsay来执行,也可以用5.2版本之后在才有的npx:</p>
          <CodeEditor codeContent={code3} height="40px"/>
          <p>npx会找到包的位置</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/WherePackages/" chooseItem={() => this.props.chooseItem('16')}/>
          <NextPage url="/node/PackageJson" chooseItem={() => this.props.chooseItem('18')}/>
        </div>
      </div>
    );
  }
}

export default ExecutePackage;