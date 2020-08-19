import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class PathModule extends Component {
  componentDidMount() {
    this.props.chooseItem('47')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>path模块</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/the-nodejs-path-module">https://nodejs.dev/learn/the-nodejs-path-module</a></p>
          <p>fs模块有很多非常有用的功能,可以访问文件系统,并进行交互</p>
          <p>作为node的核心模块,无需安装,require进来即可使用:</p>
          <CodeEditor codeContent={codeAll.code1} height="40px"/>
          <p>模块有path.sep路径段分隔符(Windows中是 \, Linux和macOS中是 /),path.delimiter
            路径分隔符(windows中是; Linux和macOS中是:)
          </p>
          <p>以下是path的方法:</p>
          <h2>path.basename()</h2>
          <p>返回路径的最后一部分.第二个参数可以筛选后缀</p>
          <CodeEditor codeContent={codeAll.code2} height="100px"/>
          <h2>path.dirname()</h2>
          <p>返回路径的目录部分:</p>
          <CodeEditor codeContent={codeAll.code3} height="80px"/>
          <h2>path.extname()</h2>
          <p>返回路径中的后缀部分:</p>
          <CodeEditor codeContent={codeAll.code4} height="80px"/>
          <h2>path.isAbsolute()</h2>
          <p>判断是否是绝对路径:</p>
          <CodeEditor codeContent={codeAll.code5} height="80px"/>
          <h2>path.join()</h2>
          <p>将路径的几个部分连接到一起:</p>
          <CodeEditor codeContent={codeAll.code6} height="80px"/>
          <h2>path.normalize()</h2>
          <p>当有代表相对路径的.或..或双斜杠时,会尝试计算真实路径</p>
          <CodeEditor codeContent={codeAll.code7} height="40px"/>
          <h2>path.parse()</h2>
          <p>将路径解析成对象:</p>
          <ul>
            <li>root: 根目录</li>
            <li>dir: 从根目录开始的文件路径</li>
            <li>base: 文件名+后缀</li>
            <li>name: 文件名</li>
            <li>ext: 后缀</li>
          </ul>
          <p>例子:</p>
          <CodeEditor codeContent={codeAll.code8} height="40px"/>
          <p>结果是:</p>
          <CodeEditor codeContent={codeAll.code9} height="180px"/>
          <h2>path.relative()</h2>
          <p>接受两个路径作为参数,基于当前的工作路径,返回有第一个路径到第二个路径的相对路径</p>
          <CodeEditor codeContent={codeAll.code10} height="80px"/>
          <h2>path.resolve()</h2>
          <p>由相对路径变为绝对路径:</p>
          <CodeEditor codeContent={codeAll.code11} height="60px"/>
          <p>指定第二个参数,会将第一个参数作为第二个参数的基础:</p>
          <CodeEditor codeContent={codeAll.code12} height="60px"/>
          <p>如果第一个参数以/开始,说明是个绝对路径:</p>
          <CodeEditor codeContent={codeAll.code13} height="40px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/fsModule" chooseItem={() => this.props.chooseItem('46')}/>
          <NextPage url="/node/osModule" chooseItem={() => this.props.chooseItem('48')}/>
        </div>
      </div>
    );
  }
}

export default PathModule;