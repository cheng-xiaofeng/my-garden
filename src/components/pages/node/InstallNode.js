import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../commonComponents'
class InstallNode extends Component {
  componentDidMount() {
    this.props.chooseItem('3')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>如何安装node.js</h1>
        <div className='articleConent'>
          <p>安装node.js有许多方法, 这里介绍最常用也最简单的一些方法</p>
          <p><a href="https://nodejs.org/en/download/.">在这里</a>可以获取到针对所有主流平台的官方的包</p>
          <p>通过包管理器安装node.js很方便,但每个操作系统的方式各不相同</p>
          <p>
            在MacOS中,<a href="https://brew.sh/">Homebrew</a>是实际的标准,在命令行内运行下面这条命令
            就能很快地安装
          </p>
          <CodeEditor codeContent="brew install node" height="40px"/>
          <p><a href="https://nodejs.org/en/download/package-manager/">Linux和Windows的包管理器在这里</a> </p>
          <p>比较流行用nvm来运行node.js,用它可以很方便的切换node.js版本,也可以安装新的版本,如果有错,就会回退</p>
          <p>用node.js的老版本来测试你的代码也很有用</p>
          <p><a href="https://github.com/creationix/nvm">在这里</a>查看有关nvm的更多信息</p>
          <p>如果你是初学者且不用Homebrew,我建议用官方的安装程序.另外说一下, Homebrew是我最喜欢的方式</p>
          <p>无论哪种方式,node.js安装好之后,你就可以在命令行中执行node程序</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/briefHistory" chooseItem={() => this.props.chooseItem('2')}/>
          <NextPage url="/node/muchJS" chooseItem={() => this.props.chooseItem('4')}/>
        </div>
      </div>
    );
  }
}

export default InstallNode;