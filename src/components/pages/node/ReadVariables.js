import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../commonComponents'
class ReadVariables extends Component {
  componentDidMount() {
    this.props.chooseItem('9')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>读取node.js环境变量</h1>
        <div className='articleConent'>
          <p>node.js的进程核心模块包含了所有的环境变量,在进程开始的时候就设置到env属性中</p>
          <p>下面是一个访问NODE_ENV环境变量的例子,默认值是development</p>
          <p>process变量不用require进来就可直接使用</p>.
          <CodeEditor codeContent='process.env.NODE_ENV // "development"' height="40px"/>
          <p>如果设为'production',脚本运行前会告知node.js这是生产环境</p>
          <p>同样的方法,你可以访问所有的环境变量</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/exitNode" chooseItem={() => this.props.chooseItem('8')}/>
          <NextPage url="/node/useREPL" chooseItem={() => this.props.chooseItem('10')}/>
        </div>
      </div>
    );
  }
}

export default ReadVariables;