import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../commonComponents'
class BriefHistory extends Component {
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>node简史</h1>
        <div className='articleConent'>

        </div>
        <div className="clickPage">
          <ForwardPages url="/node"/>
          <NextPage url="/node/installNode"/>
        </div>
      </div>
    );
  }
}

export default BriefHistory;