import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class AsyncFunction extends Component {
  componentDidMount() {
    this.props.chooseItem('34')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>Async and Await</h1>
        <div className='articleConent'>
          <h2>简介</h2>
          <p>js从回调函数进化到promises用了很短的时间,而es2017开始,有了async/await,异步就更简单了</p>
          <p>async函数是promise是和generator的结合,比promise更抽象一些:重复一遍:async/await是基于promise的</p>
          <h2>为什么引入async/await</h2>
          <CodeEditor codeContent={codeAll.code1} height="100px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/promise" chooseItem={() => this.props.chooseItem('33')}/>
          <NextPage url="/node/eventEmitter" chooseItem={() => this.props.chooseItem('35')}/>
        </div>
      </div>
    );
  }
}

export default AsyncFunction;