import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class UpdateVersion extends Component {
  componentDidMount() {
    this.props.chooseItem('22')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>升级依赖到最新版本</h1>
        <div className='articleConent'>
          <p>当你用npm install 包名 安装包的时候,会下载最新版本的包放到node_modules文件夹下,
            入口文件会放到package.json和package-lock.json文件
          </p>
          <p>npm会计算依赖,安装最新的版本</p>
          <p>比如安装cowsay,一条命令就能让cow说点东西</p>
          <p>当你运行npm install cowsay, 入口会添加到package.json文件:</p>
          <CodeEditor codeContent={codeAll.code1} height="130px"/>
          <p>这是package-lock.json文件的一部分,为了更清楚去掉了嵌套的依赖:</p>
          <CodeEditor codeContent={codeAll.code2} height="450px"/>
          <p>这两个文件告诉我们cowsay是1.3.1版本,更新规则是^1.3.1,也就是会更新次版本和修订号,
            1.3.2和1.4.0都可
          </p>
          <p>如果有次版本或者修订号发布,输入npm update,就会更新版本,package-lock.json文件
            也会随着更新
          </p>
          <p>package.json不会变化</p>
          <p>npm outdated可以查看包有没有新的版本(自己试一下,就不截图了)</p>
          <p>npm update不更新主版本.主版本意味着有重大变化,为省去麻烦,npm不会更新</p>
          <p>更新主版本需要安装npm-check-updates包</p>
          <CodeEditor codeContent={codeAll.code3} height="40px"/>
          <p>运行:</p>
          <CodeEditor codeContent={codeAll.code4} height="40px"/>
          <p>这回升级package.json文件的依赖和开发依赖版本号,然后npm就可以安装新的主版本</p>
          <p>现在可以更新了:</p>
          <CodeEditor codeContent={codeAll.code5} height="40px"/>
          <p>下载了项目却没有node_modules,而你又想安装新版本,运行:</p>
          <CodeEditor codeContent={codeAll.code6} height="40px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/OldVersion/" chooseItem={() => this.props.chooseItem('21')}/>
          <NextPage url="/node/SemanticVersion" chooseItem={() => this.props.chooseItem('23')}/>
        </div>
      </div>
    );
  }
}

export default UpdateVersion;