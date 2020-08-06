import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class FileDescriptor extends Component {
  componentDidMount() {
    this.props.chooseItem('40')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'></h1>
        <div className='articleConent'>
          <CodeEditor codeContent={codeAll.code1} height="80px"/> 
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/requestBody" chooseItem={() => this.props.chooseItem('39')}/>
          <NextPage url="/node/stats" chooseItem={() => this.props.chooseItem('41')}/>
        </div>
      </div>
    );
  }
}

export default FileDescriptor;