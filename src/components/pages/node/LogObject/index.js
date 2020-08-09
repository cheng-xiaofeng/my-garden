import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class LogObject extends Component {
  componentDidMount() {
    this.props.chooseItem('55')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'></h1>
        <div className='articleConent'>
        <CodeEditor codeContent={codeAll.code2} height="640px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/errorHandling" chooseItem={() => this.props.chooseItem('54')}/>
        </div>
      </div>
    );
  }
}

export default LogObject;