import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import { code1, code2, code3, code4 } from './constants'
class Npx extends Component {
  componentDidMount() {
    this.props.chooseItem('27')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>npx命令</h1>
        <div className='articleConent'>
          <p>2017年7月,npm 5.2版本发布了很强大的npx命令</p>
          <p>注意:不想安装npm,可以单独安装<a href="https://www.npmjs.com/package/npx">npx</a></p>
          <p>npx可以运行node代码,通过npm仓库发行</p>
          <h2>更少安装命令执行</h2>
          <p>npx有一个极好的特性, 不用安装即可执行命令</p>
          <p>这很有用,因为:</p>
          <ul>
            <li>1. 不用安装任何东西</li>
            <li>2. 使用@语法,可以运行相同命令的不同版本</li>
          </ul>
          <p>以cowsay为例, cowsay会打印出一只牛在说你在命令行写的东西</p>
          <p>cowsay 'hello' 将会这样:</p>
          <CodeEditor codeContent={code1} height="140px"/>
          <p>除非全局安装cowsay,否则会报错</p>
          <p>即使不是本地安装,npx 运行命令也不会报错</p>
          <CodeEditor codeContent={code2} height="40px"/>
          <p>这是很有意思很很少用的命令.包括:</p>
          <ul>
            <li>npx vue create-my-vue-app</li>
            <li>npx create-react-app my-react-app</li>
          </ul>
          <p>还有更多</p>
          <p>一旦被下载,下载的代码会被抹除</p>
          <h2>使用不同的node版本运行代码</h2>
          <p>使用@符指定版本,组合<a href="https://www.npmjs.com/package/node">npm包</a></p>
          <CodeEditor codeContent={code3} height="60px"/>
          <p>这可以避免使用nvm或其他node版本控制工具</p>
          <h2>运行url中的代码片段</h2>
          <p>npx不会限制npm仓库中的包</p>
          <p>运行GitHub中的代码:</p>
          <CodeEditor codeContent={code4} height="60px"/>
          <p>当然你要特别当心去运行你控制不了的代码,能力越大,责任越大(我去,蜘蛛侠吗)</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/Dependencies/" chooseItem={() => this.props.chooseItem('26')}/>
          <NextPage url="/node/EventLoop" chooseItem={() => this.props.chooseItem('28')}/>
        </div>
      </div>
    );
  }
}

export default Npx;