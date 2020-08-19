import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class EnvironmentDiffrence extends Component {
  componentDidMount() {
    this.props.chooseItem('53')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>开发环境和生产环境的不同</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/nodejs-the-difference-between-development-and-production">https://nodejs.dev/learn/nodejs-the-difference-between-development-and-production</a></p>
          <p>生产环境和开发环境有不同的配置项</p>
          <p>node会假设你在开发环境,不过你可以更改环境变量NODE_ENV=production来告诉node你在生产环境</p>
          <p>这么做:</p>
          <CodeEditor codeContent={codeAll.code1} height="40px"/>
          <p>在shell中,但是放到shell配置文件中更好(就像.bash_profile with the Bash shell,不知道是什么),
            因为万一系统重启,设置就不会持续下去
          </p>
          <p>也可以将环境变量放到程序初始化的命令前边</p>
          <CodeEditor codeContent={codeAll.code2} height="40px"/>
          <p>环境变量是个惯例,也同样被外部的库广泛使用</p>
          <p>设置环境变量为生产环境一般可以确保:</p>
          <ul>
            <li>日志记录保持在最低限度，基本水平</li>
            <li>更多的缓存级别可以优化性能</li>
          </ul>
          <p>比如pug,express用的模板库,如果NODE_ENV不是production就会在debug模式下编译.
            开发模式下,express的视图层会在每个请求下编译,生产环境下则会缓存.还有很多例子
          </p>
          <p>你可以用条件语句在不同的环境下执行代码:</p>
          <CodeEditor codeContent={codeAll.code3} height="260px"/>
          <p>在express中,给每个环境设置不同的错误处理程序</p>
          <CodeEditor codeContent={codeAll.code4} height="200px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/stream" chooseItem={() => this.props.chooseItem('52')}/>
          <NextPage url="/node/errorHandling" chooseItem={() => this.props.chooseItem('54')}/>
        </div>
      </div>
    );
  }
}

export default EnvironmentDiffrence;