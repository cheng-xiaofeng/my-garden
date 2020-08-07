import React, { Component } from 'react'
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
export default class TheDiffrences extends Component {
  
  componentDidMount() {
    this.props.chooseItem('5')
  }
  
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>node.js跟浏览器的不同之处</h1>
        <div className='articleConent'>
          <p>浏览器和node.js都是将JavaScript作为编程语言</p>
          <p>浏览器中运行的程序和node.js程序完全不同</p>
          <p>尽管都是JavaScript,但是有一些关键点的不通使得两者的体验差别很大</p>
          <p>前端开发者都是使用JavaScript,从他们的角度来看,node.js程序带给他们很大的便利:
            只用一种语言就能编写前端和后端确实很舒服
          </p>
          <p>我们都知道全面深入的学习一门语言是非常困难的,所以你有一个很大的机会就是使用同一种语言完成你的工作
            无论是客户端还是服务端.你处在一个很有优势的地方
          </p>
          <p>不同的只是生态系统不同</p>
          <p>在浏览器,大多数时间你都在进行dom操作或一些webAPI,比如cookies.node.js中,这些
            都不存在.没有document,window这些对象,也没有浏览器提供的对象
          </p>
          <p>在浏览器中,也没有node.js提供的API,像filesystem</p>
          <p>另一个很大的不同是,在node.js中,环境由你掌控.你知道需要node.js的哪个版本来运行程序,除非
            你做任何人都能部署到任何地方的开源项目.你没法选择你的用户使用什么浏览器,这点相比,node.js
            还是很方便的
          </p>
          <p>这就是说,只要node.js支持,你可以用所有新的es特性. es6-7-8-9都可</p>
          <p>JavaScript发展的很快,但是浏览器就比较慢,用户也不一定会升级浏览器.有时在web开发中,
            你不得不使用老的JavaScript/ECMAScript.
          </p>
          <p>放到浏览器之前,你可以使用babel把代码转换成兼容es5的代码,node.js中你就不用这么做</p>
          <p>另一个不同就是node.js使用CommonJS模块系统,而浏览器,我们是用es模块标准</p>
          <p>这也就是说,暂时你将在node.js中使用require(),浏览器中使用import</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/muchJS" chooseItem={() => this.props.chooseItem('4')}/>
          <NextPage url="/node/v8Engine" chooseItem={() => this.props.chooseItem('6')}/>
        </div>
      </div>
    )
  }
}
