import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import { code1, code2 } from './constants'
class AcceptCommand extends Component {
  componentDidMount() {
    this.props.chooseItem('13')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>接受命令行的输入</h1>
        <div className='articleConent'>
          <p>怎么使node.js CLI程序具有交互性</p>
          <p>node.js 7提供了一个<a href="https://nodejs.org/api/readline.html">readline</a>模块可以这么做:从一个可读的流,
          像process.stdin流,获取到输入的东西,
          在node执行的时候就是终端输入,一次一行</p>
          <CodeEditor codeContent={code1} height="240px"/>
          <p>这段代码啊要求用户名,一旦输入文本并且按下enter,就会发送一条问候</p>
          <p>question()方法显示第一个参数(一个问题)然后等待用户输入,当enter被按下的时候就调用毁掉函数</p>
          <p>在回调函数中, 我men关掉了readline interface</p>
          <p>readline还有其他的方法,你可以通过上面的链接去了解</p>
          <p>如果你需要密码,最好不要返回出来,而是显示*</p>
          <p>使用<a href="https://www.npmjs.com/package/readline-sync">readline-sync</a>包,API跟这个很相似,开箱即用</p>
          <p>一个更完整更纯粹的解决方法是<a href="https://github.com/SBoudrias/Inquirer.js">Inquirer.js package</a></p>
          <p>你可以这样安装:npm install inquirer,然后替换上面的代码:</p>
          <CodeEditor codeContent={code2} height="340px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/OutputInCommand" chooseItem={() => this.props.chooseItem('12')}/>
          <NextPage url="/node/ExportFunctionality" chooseItem={() => this.props.chooseItem('14')}/>
        </div>
      </div>
    );
  }
}

export default AcceptCommand;