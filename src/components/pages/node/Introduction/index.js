import React, { Component } from 'react'
import { 
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import {
  httpContent,
  statusContent,
  headerContent,
  resContent,
  liContent
} from './constants'
export default class Introduction extends Component {
  componentDidMount() {
    this.props.chooseItem('1')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>node简介</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/introduction-to-nodejs">https://nodejs.dev/learn/introduction-to-nodejs</a></p>
          <p>
            node.js是一个开源且跨平台的JavaScript运行环境.几乎所有项目都可以用得到
          </p>
          <p>
            node.js基于v8引擎,也就是Google chrome的核心,除了浏览器之外,这也使得node.js执行的速度非常快,且性能不俗
          </p>
          <p>
            node.js应用程序是单线程,不需要为每个请求都建立新的线程.在它的标准库里,node.js提供了一系列异步操作来阻止javascript
            程序阻塞,通常这些库都是遵循非阻塞的规范,从而使得阻塞成为例外而不是常态
          </p>
          <p>
            当node.js执行一个I/o操作时, 就像从网络中读取,访问数据库或文件系统.node.js会在响应返回时重新开始操作, 而不是阻塞线程,
            浪费cpu 的循环周期
          </p>
          <p>
            这就使得node.js可以用一个服务器就处理了成千上万的并发连接还不需要担心引入管理线程并发所带来的负担,
            而这个负担可能是bug的重大来源
          </p>
          <p>
            node.js有一个天然的优势就是几百万的为浏览器写JavaScript的前端开发者,除了客户端代码之外,
            无需再学习一种完全不同的语言就可以写服务端的代码.
          </p>
          <p>
            在node中应用新的ECMAscript标准不会有任何问题,因为你不用等待所有的用户升级他们的浏览器,你可以通过修改node
            版本来决定使用哪一套ECMAScript版本,使用带标记的node.js也使得实验阶段的特性也能使用(我也不知道这是什么意思,
            感觉就是最新的es特性也能用)
          </p>
          <h2>超大数量的库</h2>
          <p>
            凭借结构简单的特点,npm使得node.js的生态发展超级快,现在npm仓库有超过1,000,000开源的包供你免费使用
          </p>
          <h2>一个简单的node.js应用程序</h2>
          <p>最常见的node.js的例子: Hello World,是一个web服务器,如下:</p>
          <CodeEditor codeContent={httpContent} height="300px"/>
          {/*<div className="codeExample">
            <p>
              <DeclarationConst /> <span>http = </span><Keyword words="require" />(<NormalString words="http"/>)
            </p>
            <p>
              <DeclarationConst /> <span>{'hostname'} = </span><NormalString words="127.0.0.1"/>
            </p>
            <p>
              <DeclarationConst /> {'port'} = process.env.PORT
            </p>
            <code>
              <DeclarationConst /> server = http.<MethodKeyWord words="createServer"/><span>((req, res) {'=>'}</span> 
                <p className="mainCode">res.<MethodKeyWord words="statusCode"/> = <StatusNumber words="200"/></p>
                <p className="mainCode">res.<MethodKeyWord words="setHeader"/>(<NormalString words="Content-Type"/>, <NormalString words="text/plain"/>)</p>
                <p className="mainCode">res.<MethodKeyWord words="end"/>(<NormalString words="Hello World!\n"/>)</p>
                <p>{'}})'}</p>
                <p>server.<MethodKeyWord words="listen"/>(port, hostname, <span>() {'=> {'}</span></p>
                  <p className="mainCode"><span>{`console.log(Server running at http://`}</span><SpecialForm words="hostname"/><span>:</span><SpecialForm words="port"/><span>)</span></p>
                <p>{'})'}</p>
            </code>
            </div>*/}
          <p>这段代码首先包含了node.js的<a target="_blank"  rel="noopener noreferrer" href="https://nodejs.org/api/http.html">http模块</a></p>
          <p>node.js拥有非常优秀的<a target="_blank"  rel="noopener noreferrer" href="https://nodejs.org/api/">标准库</a>,包括一流的网络支持</p>
          <p>http的createServer()方法新建了一个http服务并返回了它</p>
          <p>这个服务会监听特定的端口和域名.当服务准备好了就回调用回调函数.在这个例子中通知我们服务正在运行</p>
          <p>
            当接收到一个新的请求时,<a target="_blank"  rel="noopener noreferrer" href="https://nodejs.org/api/http.html#http_event_request">request事件</a>就会被调用,提供了两个对象:
            一个request(<a target="_blank"  rel="noopener noreferrer" href="https://nodejs.org/api/http.html#http_class_http_incomingmessage">http.IncomingMessage对象</a>)(直译就是来消息对象)和
            一个response(<a target="_blank"  rel="noopener noreferrer" href="https://nodejs.org/api/http.html#http_class_http_serverresponse">http.ServerResponse对象</a>)(直译就是服务响应对象)
          </p>
          <p>这两个对象对处理http调用非常重要</p>
          <p>第一个参数是请求的详细信息,在这个例子里,并没有使用,但你可以访问请求头和请求数据</p>
          <p>第二个参数返回数据给回调函数</p>
          <p>在这里是:</p>
          <CodeEditor codeContent={statusContent} height="40px"/>
          {/*<div className="codeExample">
            res.<MethodKeyWord words="statusCode"/> = <StatusNumber words="200"/>
          </div>*/}
          <p>我们把statusCode属性设置为200, 代表响应成功</p>
          <p>设置Content-Type header</p>
          <CodeEditor codeContent={headerContent} height="40px"/>
          {/*<div className="codeExample">
            res.<MethodKeyWord words="setHeader"/>(<NormalString words="Content-Type"/>, <NormalString words="text/plain"/>)
          </div>*/}
          <p>然后关闭响应,设置返回内容给end方法:</p>
          <CodeEditor codeContent={resContent} height="40px"/>
          {/*<div className="codeExample">
            res.<MethodKeyWord words="end"/>(<NormalString words="'Hello World\n'"/>)
        </div>*/}
          <h2>node.js框架和工具</h2>
          <p>node.js是一个轻量级的平台,社区创建了很多很多库,来提高开发效率和乐趣</p>
          <p>许多已建立好的库都很受欢迎,这里列举的一些库值得亲们学习:</p>
          <ul>
            {liContent.map((item, index) => {
              return <li key={index}><a target="_blank"  rel="noopener noreferrer" href={item.href}>{item.name}</a>{item.description}</li>
            })}
          </ul>
        </div>
        <div className="clickPage">
          <NextPage url="/node/briefHistory" chooseItem={() => this.props.chooseItem('2')}/>
        </div>
      </div>
    )
  }
}
