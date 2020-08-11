import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class ReadingFile extends Component {
  componentDidMount() {
    this.props.chooseItem('43')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>读取文件</h1>
        <div className='articleConent'>
          <p>读取文件最简单的方法就是fs.readFile()方法,传入文件路径,编码格式,和回调函数</p>
          <CodeEditor codeContent={codeAll.code1} height="240px"/>
          <p>也可以用同步版本fs.readFileSync()</p>
          <CodeEditor codeContent={codeAll.code2} height="240px"/>
          <p>fs.readFile() 和 fs.readFileSync()在返回数据之前会在内存中读取全部的文件内容</p>
          <p>也就是说大文件的话,会对内存有很大的消耗,对程序的运行速度也有较大的影响</p>
          <p>这种情况下,选择数据流比较好</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/filePath" chooseItem={() => this.props.chooseItem('42')}/>
          <NextPage url="/node/writingFile" chooseItem={() => this.props.chooseItem('44')}/>
        </div>
      </div>
    );
  }
}

export default ReadingFile;