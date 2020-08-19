import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
} from '../../../commonComponents'
class BriefHistory extends Component {
  componentDidMount() {
    this.props.chooseItem('2')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>node简史</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/a-brief-history-of-nodejs">https://nodejs.dev/learn/a-brief-history-of-nodejs</a></p>
          <p>不管你信不信, node.js到现在也就10年的事件</p>
          <p>对比一下,JavaScript是24年,web是30年</p>
          <p>在技术史上,10年并不是很长的时间,但node.js却好像一直都在一样</p>
          <p>在node.js两岁的时候我就开始使用了,尽管只有有限的信息,你也可以感觉到它将会是个大事件</p>
          <p>在这块,我们将看一下node.js的伟大蓝图并展望未来</p>
          <h2>小历史</h2>
          <p>
            由网景公司创建的JavaScript是一门编程语言,用来在他们的浏览器中操作web页面.
          </p>
          <p>
            网景公司有一部分业务是出售web服务器,包括Netscape LiveWire这个可以用服务端的JavaScript来创建
            动态页面的环境.不幸的是Netscape LiveWire并不是很成功,并且服务端的JavaScript也没有流行起来,直到
            node.js的出现
          </p>
          <p>
            node.js崛起的一个关键因素就是时机.仅仅在几年前,JavaScript就被考虑成是一项严谨的语言,多亏了'web 2.0'时代
            应用程序(比如Flicker,Gmail等)向这个世界展示了更时髦的网络体验
          </p>
          <p>
            JavaScript引擎已经变得相当优秀了,众多浏览器也竞相给用户最好的的表现.主流浏览器的开发小组非常努力的
            给于JavaScript更好的支持并想发设法地是JavaScript运行的更快.node.js使用的v8引擎(也就是chrome v8,Chromium项目
            的开源JavaScript引擎),因为这种竞争也进步的非常快
          </p>
          <p>
            node.js恰好出现在对的地点和对的时间,但运气并非它今天流行的原因.它为JavaScript在服务端的发展
            引起了许多创新性的想法和方法,现已帮助了许许多多的开发者
          </p>
          <h2>2009</h2>
          <ul>
            <li>node.js诞生</li>
            <li>第一个<a target="_blank"  rel="noopener noreferrer" href="https://www.npmjs.com/">npm</a>结构诞生</li>
          </ul>
          <h2>2010</h2>
          <ul>
            <li><a target="_blank"  rel="noopener noreferrer" href="https://expressjs.com/">express</a>诞生</li>
            <li><a target="_blank"  rel="noopener noreferrer" href="https://socket.io/">Socket.io</a>诞生</li>
          </ul>
          <h2>2011</h2>
          <ul>
            <li>npm发布1.0版本</li>
            <li>大公司开始接受node.js:像LinkedIn, Uber, </li>
            <li><a target="_blank"  rel="noopener noreferrer" href="https://hapi.dev/">hapi</a>出现</li>
          </ul>
          <h2>2012</h2>
          <ul>
            <li>采用度直现上升</li>
          </ul>
          <h2>2013</h2>
          <ul>
            <li>第一个使用node.js的博客平台: <a target="_blank"  rel="noopener noreferrer" href="https://ghost.org/">Ghost</a></li>
            <li><a target="_blank"  rel="noopener noreferrer" href="https://koajs.com/">Koa</a>出生</li>
          </ul>
          <h2>2014</h2>
          <ul>
            <li>io.js是node主要分支(暂翻译为分支),目标是支持es6</li>
          </ul>
          <h2>2015</h2>
          <ul>
            <li><a target="_blank"  rel="noopener noreferrer" href="https://openjsf.org/">Node.js Foundation</a>出生</li>
            <li>IO.js合入node.js</li>
            <li>npm引入私有模块</li>
            <li>node.js 4 发布(1, 2, 3没有预先发布过)</li>
          </ul>
          <h2>2016</h2>
          <ul>
            <li>leftpad incident(不知道什么东西)</li>
            <li><a target="_blank"  rel="noopener noreferrer" href="https://classic.yarnpkg.com/en/">yarn</a>诞生</li>
            <li>node.js 6 发布</li>
          </ul>
          <h2>2017</h2>
          <ul>
            <li>npm更多的专注于安全方面</li>
            <li>Node.js 8 发布</li>
            <li>HTTP/2</li>
            <li>v8引入node.js测试套件,除了Chrome之外,node.js成为js引擎的目标</li>
            <li>每周有30亿npm下载量</li>
          </ul>
          <h2>2018</h2>
          <ul>
            <li>Node.js 10</li>
            <li><a target="_blank"  rel="noopener noreferrer" href="https://nodejs.org/api/esm.html">ES modules.mjs </a>实验性支持</li>
          </ul>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node" chooseItem={() => this.props.chooseItem('1')}/>
          <NextPage url="/node/installNode" chooseItem={() => this.props.chooseItem('3')}/>
        </div>
      </div>
    );
  }
}

export default BriefHistory;