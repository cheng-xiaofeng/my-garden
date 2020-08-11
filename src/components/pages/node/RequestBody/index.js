import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class RequestBody extends Component {
  componentDidMount() {
    this.props.chooseItem('39')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>使用node获取http请求的body数据</h1>
        <div className='articleConent'>
          <p>这是如何提取request的body中的json数据</p>
          <p>如果你用express,那就很简单:用body-parser这个模块</p>
          <p>例如:</p>
          <CodeEditor codeContent={codeAll.code1} height="160px"/>
          <p>相对应的服务端代码是:</p>
          <CodeEditor codeContent={codeAll.code2} height="340px"/>
          <p>如果你没有用express,而是想用vanilla Node.js(我也不知道该怎么翻译,香草node?),
            就要多费点事了.当然,express替你做了不少
          </p>
          <p>关键是当你用http.createServer()初始化http服务器的时候,服务器获取到所有的请求头就会调用回调函数而不是请求的body</p>
          <p>传给回调函数的request对象是一个数据流</p>
          <p>所以我们要监听body的内容被处理,并且是以chunks的方式</p>
          <p>首先通过监听数据流的data事件获取到数据,当没有数据时,数据流的end事件就被调用:</p>
          <CodeEditor codeContent={codeAll.code3} height="260px"/>
          <p>访问数据,假设我们想要接收到一个字符串,我们先要把它放进一个数组:</p>
          <CodeEditor codeContent={codeAll.code4} height="260px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/postRequest" chooseItem={() => this.props.chooseItem('38')}/>
          <NextPage url="/node/fileDescriptor" chooseItem={() => this.props.chooseItem('40')}/>
        </div>
      </div>
    );
  }
}

export default RequestBody;