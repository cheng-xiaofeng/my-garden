import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class BufferData extends Component {
  componentDidMount() {
    this.props.chooseItem('51')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'></h1>
        <div className='articleConent'>
        <CodeEditor codeContent={codeAll.code2} height="40px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/httpModule" chooseItem={() => this.props.chooseItem('50')}/>
          <NextPage url="/node/stream" chooseItem={() => this.props.chooseItem('52')}/>
        </div>
      </div>
    );
  }
}

export default BufferData;