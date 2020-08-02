import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import {code1, code2, code3, code4, code5, code6, code7, code8} from './constants'
class IntroductionOfNpm extends Component {
  componentDidMount() {
    this.props.chooseItem('15')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'></h1>
        <div className='articleConent'></div>
        <div className="clickPage">
          <ForwardPages url="/node/ExportFunctionality/" chooseItem={() => this.props.chooseItem('14')}/>
          <NextPage url="/node/WherePackages" chooseItem={() => this.props.chooseItem('15')}/>
        </div>
      </div>
    );
  }
}

export default IntroductionOfNpm;