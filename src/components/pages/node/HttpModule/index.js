import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class HttpModule extends Component {
  componentDidMount() {
    this.props.chooseItem('50')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'></h1>
        <div className='articleConent'>
        <CodeEditor codeContent={codeAll.code2} height="40px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/eventsModule" chooseItem={() => this.props.chooseItem('49')}/>
          <NextPage url="/node/buffer" chooseItem={() => this.props.chooseItem('51')}/>
        </div>
      </div>
    );
  }
}

export default HttpModule;