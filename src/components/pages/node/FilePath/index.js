import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class FilePath extends Component {
  componentDidMount() {
    this.props.chooseItem('42')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>文件路径</h1>
        <div className='articleConent'>
          <p>系统中的每个文件都有一个路径</p>
          <p>Linux和macOS中,路径像这样:/users/joe/file.txt</p>
          <p>Windows中不大一样,像这个样字:C:\users\joe\file.txt</p>
          <p>使用路径谨注意这种不同</p>
          <p>引入路径模块:</p>
          <CodeEditor codeContent={codeAll.code1} height="40px"/>
          <p>然后就可以用它的方法了</p>
          <h2>获取路径中的信息</h2>
          <p>假设有有个路径,用这些方法可以获取到一些信息:</p>
          <ul>
            <li>dirname: 获取到文件的父文件夹</li>
            <li>basename: 获取到文件的名称部分</li>
            <li>extname: 获取文件扩展名(我喜欢叫后缀)</li>
          </ul>
          <p>例子:</p>
          <CodeEditor codeContent={codeAll.code2} height="140px"/>
          <p>给basename指定第二个参数就可以取到不带文件后缀的名字</p>
          <CodeEditor codeContent={codeAll.code3} height="40px"/>
          <h2>使用path</h2>
          <p>path.join()方法可以拼合成路径</p>
          <CodeEditor codeContent={codeAll.code4} height="80px"/>
          <p>path.resolve()可以将相对路径转化成绝对路径:</p>
          <CodeEditor codeContent={codeAll.code5} height="40px"/>
          <p>这里node只是简单地将/joe.txt插到当前的工作目录.如果传入第二个文件夹参数,
            resolve会将第一个参数拼在第二个参数之前
          </p>
          <CodeEditor codeContent={codeAll.code6} height="40px"/>
          <p>如果第一个参数以/开始,就是说这是个绝对路径:</p>
          <CodeEditor codeContent={codeAll.code7} height="40px"/>
          <p>path.normalize()也是很有用的方法,再有相对路径符号的时候(.或..)它会尝试计算真实的路径:</p>
          <CodeEditor codeContent={codeAll.code8} height="40px"/>
          <p>resolve和normalize不会检查路径是否存在,它们只是基于提供的信息计算路径</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/stats" chooseItem={() => this.props.chooseItem('41')}/>
          <NextPage url="/node/readingFile" chooseItem={() => this.props.chooseItem('43')}/>
        </div>
      </div>
    );
  }
}

export default FilePath;