import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class HttpModule extends Component {
  componentDidMount() {
    this.props.chooseItem('50')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>http模块</h1>
        <div className='articleConent'>
          <p>http黑心模块是node联网的关键模块</p>
          <p>这么引入:</p>
          <CodeEditor codeContent={codeAll.code1} height="40px"/>
          <p>模块有很多属性和方法,还有一些类</p>
          <h2>属性(Properties):</h2>
          <h2>http方法(http.METHODS)</h2>
          <p>以下是http方法支持的所有属性:</p>
          <CodeEditor codeContent={codeAll.code2} height="900px"/>
          <h2>http状态码(http.STATUS_CODES)</h2>
          <p>以下是http所有的状态码和说明</p>
          <CodeEditor codeContent={codeAll.code3} height="1660px"/>
          <h2>http全局代理(http.globalAgent)</h2>
          <p>指向全局的Agent对象的实例,Agent对象是http.Agent类的实例</p>
          <p>它用于管理HTTP客户端的连接持久性和重用,是node中http联网的关键组件</p>
          <p>http.Agent类后续详解</p>
          <h2>方法(Methods):</h2>
          <h2>http.createServer()</h2>
          <p>返回http.server的一个实例:</p>
          <CodeEditor codeContent={codeAll.code4} height="80px"/>
          <h2>http请求( http.request())</h2>
          <p>发送http请求给服务器,创建一个http.ClientREquest类的实例</p>
          <h2>http的get方法(http.get())</h2>
          <p>跟http.request()类似,但是自动设置http方法为get,也会自动调用req.end()</p>
          <h2>类(Classes)</h2>
          <p>http模块有5个类:</p>
          <ul>
            <li>http.Agent</li>
            <li>http.ClientRequest</li>
            <li>http.Server</li>
            <li>http.ServerResponse</li>
            <li>http.IncomingMessage</li>
          </ul>
          <h2>http.Agent</h2>
          <p>node创建一个http.Agent的实例来管理HTTP客户端的连接持久性和重用,是node中http联网的关键组件</p>
          <p>这个对象确保每个请求是排队的 ,且重复使用一个socket</p>
          <p>也包括一个socket池,这是性能原因的关键</p>
          <h2>http.ClientRequest</h2>
          <p>当http.request()或者 http.get()被调用的时候就创建一个http.ClientRequest对象</p>
          <p>当接受到响应时,response事件就会被调用,http.IncomingMessage实例作为参数</p>
          <p>有两个方法读取response返回的数据:</p>
          <ul>
            <li>调用response.read()方法</li>
            <li>在response事件的处理程序中设置一个对data事件的监听,当数据流进入的时候就能监听到了</li>
          </ul>
          <h2>http.Server</h2>
          <p>使用http.createServer()建立新的服务器时,这个类就会被初始化并返回</p>
          <p>有两个方法访问它:</p>
          <ul>
            <li>close() 停止服务器接受新的连接</li>
            <li>listen() 开启http服务器并监听连接</li>
          </ul>
          <h2>http.ServerResponse</h2>
          <p>由http.Server创建,并作为请求事件的第二个参数,通常被写成res:</p>
          <CodeEditor codeContent={codeAll.code5} height="80px"/>
          <p>最常调用的方法是end(),用来关闭response,这是message已经完成并被发送给客户端.每次响应都要调用end()</p>
          <p>一下方法是跟http的请求头相关的:</p>
          <ul>
            <li>getHeaderNames(): 获取已经设置的http请求头的名称的列表</li>
            <li>getHeaders(): 获取已经设置的http头部的副本</li>
            <li>setHeader('headername', value): 设置http头部的值</li>
            <li>getHeader('headername'): 获取已经设置的http头部的值</li>
            <li>removeHeader('headername'): 移除一个已经设置的http头部</li>
            <li>hasHeader('headername'): 如果response有这个头部则为返回true</li>
            <li>headersSent(): 头部被发送给客户端时返回true</li>
            <li></li>
          </ul>

After processing the headers you can send them to the client by calling response.writeHead(), 
which accepts the statusCode as the first parameter, the optional status message, and the headers object.

To send data to the client in the response body, you use write(). 
It will send buffered data to the HTTP response stream.

If the headers were not sent yet using response.writeHead(), 
it will send the headers first, with the status code and message that's set in the request,
 which you can edit by setting the statusCode and statusMessage properties values:
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/eventsModule" chooseItem={() => this.props.chooseItem('49')}/>
          <NextPage url="/node/buffer" chooseItem={() => this.props.chooseItem('51')}/>
        </div>
      </div>
    );
  }
}

export default HttpModule;