import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import {
  startNode,
  nodeCommad,
  showREPL,
  logREPL,
  showArray,
  showNum
} from './constants'
class UseREPL extends Component {
  componentDidMount() {
    this.props.chooseItem('10')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>怎么使用REPL模式</h1>
        <div className='articleConent'>
          <p>node命令就是运行我们的node.js脚本的</p>
          <CodeEditor codeContent={startNode} height="40px"/>
          <p>如果我们省略文件名就进入REPL模式:</p>
          <CodeEditor codeContent={nodeCommad} height="40px"/>
          <p>注意: REPL也叫Read Evaluate Print Loop(不知如何翻译),是一个编程语言环境,
            基本就是个控制台窗口.接受用户输入的单行表达式然后返回执行结果
          </p>
          <p>如果你在终端试一下的话,就会这样:</p>
          <CodeEditor codeContent={showREPL} height="60px"/>
          <p>此时命令会停在闲置模式等我们输入东西</p>
          <p>提示: 如果你不确定如何打开终端,百度一下</p>
          <p>REPL等着我们输入js代码,更精准一点的</p>
          <p>输入一下代码,按enter:</p>
          <CodeEditor codeContent={logREPL} height="100px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/readVariables" chooseItem={() => this.props.chooseItem('9')}/>
          <NextPage url="/node/commandArguments" chooseItem={() => this.props.chooseItem('11')}/>
        </div>
      </div>
    );
  }
}

export default UseREPL;