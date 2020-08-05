import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class CallbackFunction extends Component {
  componentDidMount() {
    this.props.chooseItem('32')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>js异步编程和回调</h1>
        <div className='articleConent'>
          <h2>异步编程语言</h2>
          <p>计算机就是异步的</p>
          <p>异步就是程序可以独立于主程序流发生</p>
          <p></p>
          <CodeEditor codeContent={codeAll.code8} height="180px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/Timer" chooseItem={() => this.props.chooseItem('31')}/>
          <NextPage url="/node/PromiseFunction" chooseItem={() => this.props.chooseItem('33')}/>
        </div>
      </div>
    );
  }
}

export default CallbackFunction;