import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class PerformPostRequest extends Component {
  componentDidMount() {
    this.props.chooseItem('38')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>使用node做一个http post请求</h1>
        <div className='articleConent'>
          <p>node中有很多方法做一个http post请求,看你想做的有多抽象了</p>
          <p>最简单的是使用<a href="https://www.kancloud.cn/yunye/axios/234845">axios 库</a></p>
          <CodeEditor codeContent={codeAll.code1} height="360px"/>
          <p>Axios需要第三方库</p>
          <p>post请求只用node标准库就可以做到,只不过比前两个选择要麻烦一点</p>
          <CodeEditor codeContent={codeAll.code2} height="810px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/httpRequest" chooseItem={() => this.props.chooseItem('37')}/>
          <NextPage url="/node/requestBody" chooseItem={() => this.props.chooseItem('39')}/>
        </div>
      </div>
    );
  }
}

export default PerformPostRequest;