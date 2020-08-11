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
          <p>用node的fs模块可以读取文件,当http服务器有新的连接时就可以serve给它(server居然当动词用,这怎么翻译?)</p>
          <CodeEditor codeContent={codeAll.code1} height="240px"/>
          <p>readFile()会读取文件的所有内容,完成的时候会触发回调函数</p>
          <p>回调函数中的res.end(data)将会把内容发送给客户端</p>
          <p>如果文件很大,此操作会花费较多的时间.下面是用数据流首先同样的效果:</p>
          <CodeEditor codeContent={codeAll.code2} height="210px"/>
          <p>不用等到文件全部读取完毕,当有数据片段可以发送给客户端时就可以发送</p>
          <h2>管道(pipe)</h2>
          <p>上面的例子使用stream.pipe()</p>
          <p>它是怎么工作的?它获取到数据源,通过管道输入到我们需要输入到的地方</p>
          <p>在数据流的源那调用,这里是文件数据流pipe到http的response</p>
          <p>pipe方法返回的是目的地的数据流,这很方便我们将pipe给链起来:</p>
          <CodeEditor codeContent={codeAll.code3} height="40px"/>
          <p>就跟下面的做法一样:</p>
          <CodeEditor codeContent={codeAll.code4} height="60px"/>
          <h2>数据流驱动的node API</h2>
          <p>由于数据流的优势,许多node核心模块都提供的原生数据里处理功能:</p>
          <ul>
            <li>process.stdin 返回连接到stdin的数据流</li>
            <li>process.stdout 返回连接到process.stdout的数据流</li>
            <li>process.stderr 返回连接到process.stderr的数据流</li>
            <li>fs.createReadStream() 创建一个文件的可读数据流</li>
            <li>fs.createWriteStream() 创建一个文件的写入数据流</li>
            <li>net.connect() 初始化数据流连接</li>
            <li>http.request() 返回一个http.ClientRequest类的实例,是个可写的数据流</li>
            <li>zlib.createGzip() 使用gzip将数据压缩成数据流</li>
            <li>zlib.createGunzip() 解压一个gzip数据流</li>
            <li>zlib.createDeflate() 使用deflate将数据压缩成数据流</li>
            <li>zlib.createInflate() 解压一个deflate数据流</li>
          </ul>
          <h2>不同类型的数据流</h2>
          <p>有四类数据流:</p>
          <ul>
            <li>Readable: 一个可以用管道(pipe)接收的流.但不能用管道发送(只能接收,不能发送数据给它).当你像一个可读的数据流推送数据时,
              是buffer的,直到有consumer读取数据
            </li>
            <li>Writable: 可以用管道发送的数据流,但不能接受(只能发送,不能从这里接收数据),</li>
            <li>Duplex(双向): 既可以接收也可以发送,可读数据流和可写数据流的结合</li>
            <li>Transform: 跟Duplex有点像,但输出是输入变换后的</li>
          </ul>
          <h2>怎么创建可读数据流</h2>
          <p>可以从<a href="https://nodejs.org/api/stream.html">stream模块</a>得到可读的数据流,初始化后执行readable._read方法:</p>
          <p>首先创建一个数据流对象:</p>
          <CodeEditor codeContent={codeAll.code5} height="60px"/>
          <p>然后执行_read方法:</p>
          <CodeEditor codeContent={codeAll.code6} height="40px"/>
          <p>也可以用read选项执行read方法:</p>
          <CodeEditor codeContent={codeAll.code7} height="80px"/>
          <p>现在数据流初始化了,就可以发送数据给它了:</p>
          <CodeEditor codeContent={codeAll.code8} height="60px"/>
          <h2>怎么创建可写的数据流</h2>
          <p>创建可写的数据流要继承Writable对象,然后执行_write方法</p>
          <p>首先创建一个数据流对象</p>
          <CodeEditor codeContent={codeAll.code9} height="60px"/>
          <p>然后执行write方法</p>
          <CodeEditor codeContent={codeAll.code10} height="40px"/>
          <p>现在可以匹配一个可读的数据流</p>
          <CodeEditor codeContent={codeAll.code11} height="40px"/>
          <h2>怎么从可读的数据流中获取数据</h2>
          <p>怎么从可读的数据流中获取数据,答案是用可写的数据流:</p>
          <CodeEditor codeContent={codeAll.code12} height="420px"/>
          <p>也可以使用readable事件直接获取:</p>
          <CodeEditor codeContent={codeAll.code13} height="80px"/>
          <h2>怎么给可写的数据流发送数据</h2>
          <p>使用数据流的write方法:</p>
          <CodeEditor codeContent={codeAll.code14} height="40px"/>
          <h2>向可写的数据流发送停止写入的信号</h2>
          <p>使用end方法</p>
          <CodeEditor codeContent={codeAll.code15} height="500px"/>
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