import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../commonComponents'
class PerformPostRequest extends Component {
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'></h1>
        <div className='articleConent'></div>
        <div className="clickPage">
          <ForwardPages url="" />
          <NextPage url="" />
        </div>
      </div>
    );
  }
}

export default PerformPostRequest;