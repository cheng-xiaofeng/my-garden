import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class BufferData extends Component {
  componentDidMount() {
    this.props.chooseItem('51')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>buffer</h1>
        <div className='articleConent'>
          <h2>什么是buffer?</h2>
          <p>一个buffer就是一块内存区间.js开发者对这个概念远不如C C++或者Go开发者熟悉(或者其他使用
            系统编程语言的开发者),他们每天都跟内存打交道</p>
          <p>它代表一个固定大小(不可改变大小)的内存块,分配在v8 js引擎之外</p>
          <p>你可以将buffer当成是一个整数的数组,每个都代表一个字节的数据</p>
          <p>它是由<a href="https://nodejs.org/api/buffer.html">buffer 类</a>部署的</p>
          <h2>为什么我们需要buffer?</h2>
          <p>引入buffer是为了帮助开发者在一个只处理字符串而不是二进制的生态系统中处理二进制的数据</p>
          <p>buffer和数据流紧密相连,当数据流处理器接受数据太快而忙不过来的时候,就把数据放到buffer中</p>
          <p>一个很形象话的例子就是当你再看YouTube的时候,红色的进度条超过你所看的那个点:下载数据
            比你看到的要快,你的浏览器在缓冲(buffer)
          </p>
          <h2>怎么建立buffer?</h2>
          <p>建立buffer使用Buffer.from(),Buffer.alloc(),Buffer.allocUnsafe()方法:</p>
          <CodeEditor codeContent={codeAll.code1} height="40px"/>
          <ul>
            <li>Buffer.from(array)</li>
            <li>Buffer.from(arrayBuffer[,byteOffset[,length]])</li>
            <li>Buffer.from(buffer)</li>
            <li>Buffer.from(string[,encoding])</li>
          </ul>
          <p>也可以传入大小来初始化buffer,以下是创建一个1kb的buffer:</p>
          <CodeEditor codeContent={codeAll.code2} height="80px"/>
          <p>alloc和allocUnsafe分配给buffer一个特定的大小,以字节为单位.alloc创建的buffer会以0初始化,
            而allocUnsafe则不会初始化.这就是说allocUnsafe比alloc速度要快,但分配的内存片段可能会包含敏感的
            旧数据
          </p>
          <p>旧的数据,如果存在内存当中,当读取buffer内存的时候可能会被访问或泄露.这就是为什么allocUnsafe不安全
            的原因,所以使用的时候要格外注意
          </p>
          <h2>使用buffer</h2>
          <h3>访问buffer内容</h3>
          <p>buffer就一个元素为字节的数组,所以可以像访问数组一样访问它:</p>
          <CodeEditor codeContent={codeAll.code3} height="120px"/>
          <p>这些数字就是字母的Unicode编码(H--72, e--101, y--121)</p>
          <p>toString方法可以将buffer的内容打印出来</p>
          <CodeEditor codeContent={codeAll.code4} height="40px"/>
          <p>注意: 如果你初始化的时候给buffer设置了大小,那你就访问了预初始化的内存,包含一些随机的数据,而不是空buffer</p>
          <h3>获取buffer的长度</h3>
          <p>使用length属性获取buffer属性</p>
          <CodeEditor codeContent={codeAll.code5} height="60px"/>
          <h3>遍历buffer的内容</h3>
          <CodeEditor codeContent={codeAll.code6} height="120px"/>
          <h3>改变buffer的内容</h3>
          <p>使用write方法,给buffer写一个字符串数据</p>
          <CodeEditor codeContent={codeAll.code7} height="60px"/>
          <p>访问buffer可以向访问数据一样,所以设置buffer也可以跟设置数组一样</p>
          <CodeEditor codeContent={codeAll.code8} height="80px"/>
          <h3>复制buffer</h3>
          <p>使用copy方法复制buffer</p>
          <CodeEditor codeContent={codeAll.code9} height="80px"/>
          <p>默认是复制整个buffer,还能添加3个参数,代表开始位置,结束为止,和新buffer的长度</p>
          <CodeEditor codeContent={codeAll.code10} height="120px"/>
          <h3>分割buffer(slice a buffer)</h3>
          <p>使用slice创建一部分buffer,slice并不是复制:原来的buffer改变,slice的buffer也会改变(也就是浅复制)</p>
          <p>slice方法第一个参数是开始位置,第二个可选,是结束位置.(就是数组和字符串的slice)</p>
          <CodeEditor codeContent={codeAll.code11} height="160px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/httpModule" chooseItem={() => this.props.chooseItem('50')}/>
          <NextPage url="/node/stream" chooseItem={() => this.props.chooseItem('52')}/>
        </div>
      </div>
    );
  }
}

export default BufferData;