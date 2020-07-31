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