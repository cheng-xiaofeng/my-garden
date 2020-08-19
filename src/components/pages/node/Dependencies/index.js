import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
} from '../../../commonComponents'
class Dependencies extends Component {
  componentDidMount() {
    this.props.chooseItem('26')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>依赖与开发依赖</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/npm-dependencies-and-devdependencies">https://nodejs.dev/learn/npm-dependencies-and-devdependencies</a></p>
          <p>用npm install 包名 安装一个包,就是作为依赖安装的</p>
          <p>包会自动陈列在package.json文件中,在dependencies列表下(需要手动指定--save)</p>
          <p>-D或者--save-dev符号,会安装为开发依赖,添加到devDependenciee</p>
          <p>开发依赖是指在开发时用的包,生产时不需要,比如test包,webpack,Babel</p>
          <p>生产环境下,输入npm install,npm会假设这是开发部署</p>
          <p>你需要设置--production符号(npm install --production),避免安装开发依赖</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/GlobalOrlocally" chooseItem={() => this.props.chooseItem('25')}/>
          <NextPage url="/node/Npx" chooseItem={() => this.props.chooseItem('26')}/>
        </div>
      </div>
    );
  }
}

export default Dependencies;