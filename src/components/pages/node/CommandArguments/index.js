import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import {
  startCode,
  startCode2,
  startCode3,
  startCode4,
  processArgv,
  args,
  args2,
  args3
} from './constants'
class CommandArguments extends Component {
  componentDidMount() {
    this.props.chooseItem('11')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>接受命令行的参数</h1>
        <div className='articleConent'>
          <p>启动node.js程序的时候可以传入任何参数:</p>
          <CodeEditor codeContent={startCode} height="40px"/>
          <p>参数可以是单独的,也可以是键值对</p>
          <p>例如:</p>
          <CodeEditor codeContent={startCode2} height="40px"/>
          <p>或者:</p>
          <CodeEditor codeContent={startCode3} height="40px"/>
          <p>这会改变你检索这个值的方法</p>
          <p>使用node.js内置的process对象,可以获取到它</p>
          <p>process提供了一个argv属性,一个包含所有命令行参数的数组</p>
          <p>第一个参数是node命令的绝对路径</p>
          <p>第二个是执行文件的绝对路径</p>
          <p>其他的参数都是熊第三个位置开始</p>
          <p>用一个循环可以罗列出所有的参数(包括node路径和文件路径):</p>
          <CodeEditor codeContent={processArgv} height="80px"/>
          <p>你可以创建一个排除前两个参数的新数组,获取到其余的参数:</p>
          <CodeEditor codeContent={args} height="40px"/>  
          <p>如果有一个参数而没有属性名,像这样:</p>
          <CodeEditor codeContent={startCode2} height="40px"/>
          <p>你可以这么来获取:</p>
          <CodeEditor codeContent={args2} height="60px"/>
          <p>下面这样:</p>
          <CodeEditor codeContent={startCode3} height="40px"/>
          <p>args[0]是name=joe,你就需要解析它.最好的方式是使用<a href="https://www.npmjs.com/package/minimist">minimist</a>库,
            可以解决这种情况:
          </p>
          <CodeEditor codeContent={args3} height="60px"/>
          <p>这次你需要在每个参数属性名前面加上两个虚线:</p>
          <CodeEditor codeContent={startCode4} height="40px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/UseREPL" chooseItem={() => this.props.chooseItem('10')}/>
          <NextPage url="/node/OutputInCommand" chooseItem={() => this.props.chooseItem('12')}/>
        </div>
      </div>
    );
  }
}

export default CommandArguments;