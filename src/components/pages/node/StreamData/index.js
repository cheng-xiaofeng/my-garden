import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class StreamData extends Component {
  componentDidMount() {
    this.props.chooseItem('52')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>数据流</h1>
        <div className='articleConent'>
          <h2>什么是数据流?</h2>
          <p>数据流是驱动node程序的基础改变之一</p>
          <p>数据流是一种读写文件,网络交流,或其他端对端信息交换的很高效的方式</p>
          <p>数据流这种概念并不是只有node才有,数十年前Unix操作系统就引入了这个概念,程序之间可以通过管道操作符(|)
            传送数据流来交互
          </p>
          <p>比如,传统的方式是程序读取文件到内存中,从头到尾,然后你再处理</p>
          <p>使用数据流可以一点一点地去读,不用全部保存在内存中就可以处理了</p>
          <p>node的<a href="https://nodejs.org/api/stream.html">stream 模块</a>提供了数据流API的基础,
            所有的数据流都是<a href="https://nodejs.org/api/events.html#events_class_eventemitter">EventEmitter的实例</a>
          </p>
          <h2>为什么选择数据流</h2>
          <p>跟其他处理数据的方法相比,数据流有两个明显的优势:</p>
          <ul>
            <li>内存效率: 在处理文件之前不用加载太多的数据到内存中</li>
            <li>时间效率: 一旦有了数据流就可以处理数据不用等太长时间, 而不是等数据都加载完成才开始处理</li>
          </ul>
          <h2>数据流的例子</h2>
          <p>典型的例子就是从磁盘中读取文件</p>
          <p></p>
        <CodeEditor codeContent={codeAll.code2} height="40px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/buffer" chooseItem={() => this.props.chooseItem('51')}/>
          <NextPage url="/node/environmentDiffrence" chooseItem={() => this.props.chooseItem('53')}/>
        </div>
      </div>
    );
  }
}

export default StreamData;