import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class OSModule extends Component {
  componentDidMount() {
    this.props.chooseItem('48')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>os模块</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/the-nodejs-os-module">https://nodejs.dev/learn/the-nodejs-os-module</a></p>
          <p>这个模块提供了很多函数,可以用来获取底层操作系统的信息以及程序运算的计算机的信息,并进行交互</p>
          <CodeEditor codeContent={codeAll.code1} height="40px"/>
          <p>有一些很有用的属性可以告诉我们处理文件的关键事情:</p>
          <p>os.EOL给的是分隔符序列.Linux和macOS上是\n,Windows上是\r\n</p>
          <p>os.constants.signals是跟进程信号相关的常量,像SIGHUP,SIGKILL等</p>
          <p>在<a target="_blank"  rel="noopener noreferrer" href="https://nodejs.org/api/os.html#os_signal_constants">这里</a>可以看到更多信息</p>
          <p>现在来看看你os提供的主要方法:</p>
          <h2>os.arch()</h2>
          <p>返回代表底层架构的字符串,像arm,x64,arm64</p>
          <h2>os.cpus()</h2>
          <p>返回系统可用cpu的信息</p>
          <p>例子:</p>
          <CodeEditor codeContent={codeAll.code2} height="640px"/>
          <h2>os.endianness()</h2>
          <p>返回BE或者LE,取决于node是被Big Endian编译还是Little Endian编译</p>
          <h2>os.freemem()</h2>
          <p>返回系统中可用内存的字节数</p>
          <h2>os.homedir()</h2>
          <p>返回当前用户的根目录:</p>
          <CodeEditor codeContent={codeAll.code3} height="40px"/>
          <h2>os.hostname()</h2>
          <p>返回主机名</p>
          <h2>os.loadavg()</h2>
          <p>返回操作系统对平均负载所做的计算</p>
          <p>Linux and macOS上只返回有意义的值</p>
          <CodeEditor codeContent={codeAll.code4} height="40px"/>
          <h2> os.networkInterfaces()</h2>
          <p>返回系统上可用网络接口的详细信息</p>
          <CodeEditor codeContent={codeAll.code5} height="940px"/>
          <h2>os.platform()</h2>
          <p>返回node是为哪个平台编译的:</p>
          <ul>
            <li>darwin</li>
            <li>freebsd</li>
            <li>linux</li>
            <li>openbsd</li>
            <li>win32</li>
            <li>...more</li>
          </ul>
          <h2>os.release()</h2>
          <p>返回标识操作系统版本号的字符串</p>
          <h2>os.tmpdir()</h2>
          <p>返回临时文件夹的路径</p>
          <h2>os.totalmem()</h2>
          <p>返回总的可用内存的字节数</p>
          <h2>os.type()</h2>
          <p>操作系统类型</p>
          <ul>
            <li>Linux</li>
            <li>macOS上是Darwin</li>
            <li>Windows上是Windows_NT</li>
          </ul>
          <h2>os.uptime()</h2>
          <p>返回上次计算机重启后运行的时间(秒)</p>
          <h2>os.userInfo()</h2>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/pathModule"  chooseItem={() => this.props.chooseItem('47')}/>
          <NextPage url="/node/eventsModule"  chooseItem={() => this.props.chooseItem('49')}/>
        </div>
      </div>
    );
  }
}

export default OSModule;