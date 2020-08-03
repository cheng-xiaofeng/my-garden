import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import { code1 } from './constants'
class PackageLockJson extends Component {
  componentDidMount() {
    this.props.chooseItem('19')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>package-lock.json文件</h1>
        <div className='articleConent'></div>
        <div className="clickPage">
          <ForwardPages url="/node/PackageJson/" chooseItem={() => this.props.chooseItem('18')}/>
          <NextPage url="/node/FindVersion" chooseItem={() => this.props.chooseItem('20')}/>
        </div>
      </div>
    );
  }
}

export default PackageLockJson;