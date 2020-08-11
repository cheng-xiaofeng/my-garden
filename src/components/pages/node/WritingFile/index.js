import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class WritingFile extends Component {
  componentDidMount() {
    this.props.chooseItem('44')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>写入文件</h1>
        <div className='articleConent'>
          <p>写入文件最简单的方法就是fs.writeFile()</p>
          <CodeEditor codeContent={codeAll.code1} height="300px"/>
          <p>也可以用同步版本:</p>
          <CodeEditor codeContent={codeAll.code2} height="260px"/>
          <p>默认的,这个API会覆盖原有的内容</p>
          <p>可以添加一个标识修改默认行为:</p>
          <CodeEditor codeContent={codeAll.code3} height="40px"/>
          <p>其他的标识符:</p>
          <ul>
            <li>r+ 读取和写入文件</li>
            <li>w+ 读取和写入文件,将数据流定位到文件的开始位置.如果没有就创建新的</li>
            <li>a 写入文件,将数据流定位到文件的末尾.如果没有就创建新的</li>
            <li>a+ 读取和写入文件,将数据流定位到文件的末尾.如果没有就创建新的</li>
          </ul>
          <p><a href="https://nodejs.org/api/fs.html#fs_file_system_flags">这里</a>有更多标识</p>
          <h2>插入文件</h2>
          <p>插入文件尾部的方法是fs.appendFile()(fs.appendFileSync()类似):</p>
          <CodeEditor codeContent={codeAll.code4} height="240px"/>
          <h2>使用数据流</h2>
          <p>所有的方法在将控制返回到程序之前会写入所有的文件(sync版本中是执行回调)</p>
          <p>这种情况下可以选择流来做</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/readingFile" chooseItem={() => this.props.chooseItem('43')}/>
          <NextPage url="/node/folder" chooseItem={() => this.props.chooseItem('45')}/>
        </div>
      </div>
    );
  }
}

export default WritingFile;