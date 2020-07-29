import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../commonComponents'
class InstallNode extends Component {
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>如何安装node.js</h1>
        <div className='articleConent'></div>
        <div className="clickPage">
          <ForwardPages url="/node/briefHistory"/>
          <NextPage url="/node/muchJS"/>
        </div>
      </div>
    );
  }
}

export default InstallNode;