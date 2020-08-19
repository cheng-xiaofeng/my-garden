import React, { Component } from 'react'
import { 
  ForwardPages,
  NextPage,
} from '../../../commonComponents'
export default class Engine extends Component {
  componentDidMount() {
    this.props.chooseItem('6')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>JavaScript V8引擎</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/the-v8-javascript-engine">https://nodejs.dev/learn/the-v8-javascript-engine</a></p>
          <p>v8是驱动Google chrome 的JavaScript引擎的名字.使用chrome上网,就是它接受JavaScript并执行</p>
          <p>v8提供了JavaScript的运行环境.还有dom, 其他webAPI</p>
          <p>JavaScript引擎独立于它所支持的浏览器,这个特点促使了node.js的崛起. 2009年,v8被选中为驱动node.js
            的引擎,node.js的受欢迎程度爆炸性增长,v8成了驱动服务端用JavaScript编写的代码的引擎
          </p>
          <p>得益于node.js庞大的生态圈,v8也支持桌面程序,像Electron</p>
          <h2>其他的js引擎</h2>
          <p>其他浏览器都有自己的js引擎</p>
          <ul>
            <li>火狐有<a target="_blank"  rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a></li>
            <li>safari有<a target="_blank"  rel="noopener noreferrer" href="https://developer.apple.com/documentation/javascriptcore">JavaScriptCore</a></li>
            <li>edge有<a target="_blank"  rel="noopener noreferrer" href="https://github.com/Microsoft/ChakraCore">Chakra</a></li>
          </ul>
          <p>还有其他一些</p>
          <p>所有引擎都执行<a target="_blank"  rel="noopener noreferrer" href="https://www.ecma-international.org/publications/standards/Ecma-262.htm">ECMA ES-262</a>标准,
          也叫ECMAScript,也就是JavaScript使用的标准</p>
          <h2>对性能的需求</h2>
          <p>v8使用c++编写,且持续改良.它很方便的运行在Mac, Windows, Linux和其他服务器系统中</p>
          <p>在这里,我们将会忽略一些v8执行的细节:在<a target="_blank"  rel="noopener noreferrer" href="https://v8.dev/">the V8 official site</a>这个更权威的网站上可以看到</p>
          <p>v8一直在向前发展,就像其他的js引擎,会加速web和node.js生态的发展</p>
          <p>在web中,性能竞赛已经持续很多年了,我们(用户和开发者)也从中受益.因为我们获得更快,更优化的机器</p>.
          <h2>编译</h2>
          <p>通常JavaScript被当成是解释性语言,但现在的js引擎不解释而是编译</p>
          <p>2009年开始,当SpiderMonkey编译器加入到火狐3.5之后,所有的人都跟着这样做了</p>
          <p>js被v8即时编译并加速执行</p>
          <p>这好像违反常理,但在2004年谷歌地图问世后,js已经从只能执行几十行代码的语言变成
          几千到几十万行代码,运行在浏览器中的执行程序
          </p>
          <p>现在,执行程序可以在浏览器中运行几个小时,而不仅仅只是一些表单验证和简单的脚本</p>
          <p>在这样的情况下,编译js更合理一些,虽然准备的时间有点长,但是一旦完成可比单纯的只解释代码,性能高多了</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/diffrences" chooseItem={() => this.props.chooseItem('5')}/>
          <NextPage url="/node/runNode" chooseItem={() => this.props.chooseItem('7')}/>
        </div>
      </div>
    )
  }
}
