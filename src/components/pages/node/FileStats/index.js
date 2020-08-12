import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class FileStats extends Component {
  componentDidMount() {
    this.props.chooseItem('41')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>文件stats</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank" href="https://nodejs.dev/learn/nodejs-file-stats">https://nodejs.dev/learn/nodejs-file-stats</a></p>
          <p>我们可以用node来检查文件附带的详细信息</p>
          <p>通常使用fs模块的stat方法</p>
          <p>传入文件路作为参数,node获取到文件的详细信息后就会调用传入的回调函数,有两个参数:
            错误信息和文件stats
          </p>
          <CodeEditor codeContent={codeAll.code1} height="200px"/>
          <p>node也有一个同步的方法,会阻塞线程直到文件stats完毕</p>
          <CodeEditor codeContent={codeAll.code2} height="160px"/>
          <p>文件新秀就在stats变量中.那stats包含哪些信息呢?</p>
          <p>很多,包括:</p>
          <ul>
            <li>判断文件是目录还是文件,用stats.isFile()和stats.isDirectory()</li>
            <li>判断文件是不是符号链接用stats.isSymbolicLink()</li>
            <li>文件有多少字节用stats.size</li>
          </ul>
          <p>有许多超前的方法,但日常用到的就是这些:</p>
          <CodeEditor codeContent={codeAll.code3} height="300px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/fileDescriptor" chooseItem={() => this.props.chooseItem('40')}/>
          <NextPage url="/node/filePath" chooseItem={() => this.props.chooseItem('42')}/>
        </div>
      </div>
    );
  }
}

export default FileStats;