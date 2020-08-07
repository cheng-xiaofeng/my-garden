import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class FileDescriptor extends Component {
  componentDidMount() {
    this.props.chooseItem('40')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>node的文件描述符</h1>
        <div className='articleConent'>
          <p>在与文件系统中的文件交互之前,你要先取得文件描述符</p>
          <p>文件描述符是fs模块中的open方法打开文件时返回来的</p>
          <CodeEditor codeContent={codeAll.code1} height="130px"/>
          <p>注意一下fs.open()的第二个参数r</p>
          <p>这个表示是说打开文件是为了读取</p>
          <p>其他常用的表示符:</p>
          <ul>
            <li>r+ 读取和写入文件</li>
            <li>w+ 读取和写入文件,将流定位到文件的开始位置.如果没有就创建新的</li>
            <li>a 写入文件,将流定位到文件的末尾.如果没有就创建新的</li>
            <li>a+ 读取和写入文件,将流定位到文件的末尾.如果没有就创建新的</li>
          </ul>
          <p>也可以用fs.openSync打开文件,返回一个文件描述符而不是提供给回调函数:</p>
          <CodeEditor codeContent={codeAll.code2} height="180px"/>
          <p>一旦取得文件描述符,不管哪种方法取到的,你就可以进行所有需要它的操作了.像调用fs.open以及
            其他和文件系统的交互操作
          </p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/requestBody" chooseItem={() => this.props.chooseItem('39')}/>
          <NextPage url="/node/stats" chooseItem={() => this.props.chooseItem('41')}/>
        </div>
      </div>
    );
  }
}

export default FileDescriptor;