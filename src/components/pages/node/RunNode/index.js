import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
class RunNode extends Component {
  componentDidMount() {
    this.props.chooseItem('7')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>在命令行运行node.js</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank" href="https://nodejs.dev/learn/run-nodejs-scripts-from-the-command-line">https://nodejs.dev/learn/run-nodejs-scripts-from-the-command-line</a></p>
          <p>一半运行node.js程序的方式就是node全局命令(一旦你安装node)
            然后将想执行的文件的名字传过去
          </p>
          <p>如果你的node.js程序文件是app.js,你可以这么做</p>
          <CodeEditor codeContent="node app.js" height="40px"/>
          <p>运行这条命令,确保app.js的同级目录下</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/v8Engine" chooseItem={() => this.props.chooseItem('6')}/>
          <NextPage url="/node/exitNode" chooseItem={() => this.props.chooseItem('8')}/>
        </div>
      </div>
    );
  }
}

export default RunNode;