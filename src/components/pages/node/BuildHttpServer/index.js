import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class BuildHttpServer extends Component {
  componentDidMount() {
    this.props.chooseItem('36')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>创建一个http服务器</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank" href="https://nodejs.dev/learn/build-an-http-server">https://nodejs.dev/learn/build-an-http-server</a></p>
          <p>这是hello world http web服务器的小demo:</p>
          <CodeEditor codeContent={codeAll.code1} height="360px"/>
          <p>界面会显示:</p>
          <CodeEditor codeContent={codeAll.code2} height="40px"/>
          <p>简单分析一下,它包含<a target="_blank" href="https://nodejs.org/api/http.html">http module</a></p>
          <p>我们使用这个模块简历http服务器</p>
          <p>服务器被设定监听一个特定的端口:3000.当服务器准备好以后,监听回调函数就会被调用</p>
          <p>在每个request进来的时候我们传的回调函数都会执行.无论什么时候接收到一个新的request,
            <a target="_blank" href="https://nodejs.org/api/http.html#http_event_request">request事件</a>
            就会被调用,提供两个对象:一个request(一个<a target="_blank" href="https://nodejs.org/api/http.html#http_class_http_incomingmessage">http.IncomingMessage对象</a>)
            一个是response(一个<a target="_blank" href="https://nodejs.org/api/http.html#http_class_http_serverresponse">http.ServerResponse对象</a>)
          </p>
          <p>request对象提供request的详细信息.通过它,我们可以访问请求头和请求数据</p>
          <p>response对象用来填充我们将要返回给客户端的数据</p>
          <p>这里是:</p>
          <CodeEditor codeContent={codeAll.code3} height="40px"/>
          <p>设置statusCode属性为200,证明响应成功</p>
          <p>设置Content-Type header:</p>
          <CodeEditor codeContent={codeAll.code4} height="40px"/>
          <p>最后关闭响应,将内容作为参数给end()</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/eventEmitter" chooseItem={() => this.props.chooseItem('35')}/>
          <NextPage url="/node/httpRequest" chooseItem={() => this.props.chooseItem('37')}/>
        </div>
      </div>
    );
  }
}

export default BuildHttpServer;