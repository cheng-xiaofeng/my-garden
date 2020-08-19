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
        <h1 className='article-reader__headline'>npm包管理器介绍</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager">https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager</a></p>
          <h2>npm介绍</h2>
          <p>npm是node的包管理器标准</p>
          <p>2017年一月,npm仓库已经有超过350000个包,是地球上最大的单语言代码仓库,几乎拥有适合所有事情的包</p>
          <p>开始只是下载和管理node包的依赖,后来成了前端js的工具</p>
          <p>npm可以做很多事情</p>
          <p>注意: <a target="_blank"  rel="noopener noreferrer" href="https://classic.yarnpkg.com/en/">yarn</a>跟npm差不多,你也可以了解一下</p>
          <h2>下载</h2>
          <p>npm管理,下载你项目的依赖</p>
          <h2>安装所有依赖</h2>
          <p>如果项目有package.json文件,运行:</p>
          <CodeEditor codeContent={code1} height="40px"/>
          <p>将会安装项目需要的所有东西,如果没有node_modules文件夹,就回创建一个</p>
          <h2>安装单个依赖</h2>
          <p>你可以安装特定的依赖,运行:</p>
          <CodeEditor codeContent={code2} height="40px"/>
          <p>通常你需要添加一些标识:</p>
          <ul>
            <li>--save 表示添加到package.json文件的dependencies</li>
            <li>--save-dev 表示添加到package.json文件的devDependencies</li>
          </ul>
          <h2>升级依赖</h2>
          <p>升级依赖也很简单,运行:</p>
          <CodeEditor codeContent={code3} height="40px"/>
          <p>npm会检查所有依赖的新版本以满足你的版本要求</p>
          <p>你也可以升级单独的一个依赖:</p>
          <CodeEditor codeContent={code4} height="40px"/>
          <h1>版本</h1>
          <p>除了下载,npm还可以进行版本控制,你可以指定某个包特定的版本,或者引入高版本或低版本</p>
          <p>许多情况下你胡发现,有的库只兼容另一个库的特定版本</p>
          <p>或者最近的版本中有未修复的bug而导致问题</p>
          <p>明确库的版本会让所有人都使用相同版本的包,整个小组都会用同样的版本知道package.json文件更新</p>
          <p>在上述情况下,版本控制会有很大的帮助,npm遵循语义化的版本标准</p>
          <h2>运行任务</h2>
          <p>package.json支持一种可以在命令行用下面这种方式运行任务的格式:</p>
          <CodeEditor codeContent={code5} height="40px"/>
          <p>比如:</p>
          <CodeEditor codeContent={code6} height="160px"/>
          <p>这个特性可以支持webpack:</p>
          <CodeEditor codeContent={code7} height="200px"/>
          <p>所以不用输入那么长的命令,很容易忘记或者输错,只需要这样就可以了:</p>
          <CodeEditor codeContent={code8} height="80px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/ExportFunctionality/" chooseItem={() => this.props.chooseItem('14')}/>
          <NextPage url="/node/WherePackages" chooseItem={() => this.props.chooseItem('15')}/>
        </div>
      </div>
    );
  }
}

export default IntroductionOfNpm;