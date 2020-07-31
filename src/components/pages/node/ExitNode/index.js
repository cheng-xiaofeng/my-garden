import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import {processExit, processExit2, httpServer, httpServer2, processExit3} from './constants'
class ExitNode extends Component {
  componentDidMount() {
    this.props.chooseItem('8')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>退出node.js</h1>
        <div className='articleConent'>
          <p>有很多方法可以终止node.js进程</p>
          <p>在控制台运行时可以用Ctrl+C关闭,但这里我们想说的是以编程的方式退出</p>
          <p>我们先从最极端的方式开始,看一下为什么最好不要用这种方式</p>
          <p>进程核心模块提供了一个方便的方法来退出node.js:process.exit()</p>
          <p>当node.js运行这条命令是,进程就会立刻强制终止</p>
          <p>这就是说,任何正在调用的回调,任何正在发送的请求,任何访问的文件,或者标准输出或者标准错误等
            都会立刻终止,没有任何撤退可言.
          </p>
          <p>如果你可以接受,你可以传一个代表操作退出的数字</p>
          <CodeEditor codeContent={processExit} height="40px"/>
          <p>默认是0,也就是代表成功.不同的退出码有不同的含义,也就是你可以用自己的程序体系</p>
          <p>你可以在<a href="https://nodejs.org/api/process.html#process_exit_codes">这里</a>看到跟多的信息</p>
          <p>你也可以设置process.exitCode这个属性:</p>
          <CodeEditor codeContent={processExit2} height="40px"/>
          <p>程序稍后会退出,node.js会返回这个退出码</p>
          <p>当所有进程都完成的时候,程序会很优雅的退出</p>
          <p>很多情况下,我们都会开启服务,比如http服务:</p>
          <CodeEditor codeContent={httpServer} height="160px"/>
          <p>这段程序永远都不会结束,如果你调用process.exit(),当前正在进行的程序或者请求就会中止.这感觉并不好</p>
          <p>你可以发送一个SIGTERM标识,使用process标识方法(注意: process不需要require进来,可直接使用):</p>
          <CodeEditor codeContent={httpServer2} height="295px"/>
          <p>什么是标识?标识就是一个POSIX内在沟通系统:一个发给进程的通知,告诉它有事件被触发</p>
          <p>SIGKILL是告诉进程立即终止,很像process.exit()</p>
          <p>SIGTERM是告诉进程优雅的结束.这是进程管理发出的标识,想upstart和supervisord等等</p>
          <p>你也可以在程序内部用另一种方法发送标识:</p>
          <CodeEditor codeContent={processExit3} height="40px"/>
          <p>或者也可以从另一个node程序,或者其他你想终止的进程的PID</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/runNode" chooseItem={() => this.props.chooseItem('7')}/>
          <NextPage url="/node/readVariables" chooseItem={() => this.props.chooseItem('9')}/>
        </div>
      </div>
    );
  }
}

export default ExitNode;