import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class PackageJson extends Component {
  componentDidMount() {
    this.props.chooseItem('18')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>package.json指南</h1>
        <div className='articleConent'>
          <p>如果你使用js,或者跟js项目,node,或者前端项目打过交道,你一定见过package.json文件</p>
          <p>那是什么?关于它,你应该知道些什么,有了它,你有做些什么?</p>
          <p>package.json就像你项目的清单一样,可以做许多完全独立的事情.它是工具配置的仓库.也是
            保存npm和yarn下载的包的名字和版本的地方
          </p>
          <h2>文件结构</h2>
          <p>这里是个小例子:</p>
          <CodeEditor codeContent={codeAll.code1} height="40px"/>
          <p>它是空的.package.json文件没有固定的要求.唯一的要求就是只接受json格式,否则就读取不到它的属性</p>
          <p>如果你建了一个node包,想要根本上改变跟npm相关的东西(此句为直译),你一定要有一个属性集来帮助其他人
            来使用它,后续我们再详解
          </p>
          <p>这是另一个例子:</p>
          <CodeEditor codeContent={codeAll.code2} height="80px"/>
          <p>它定义了一个name属性,代表程序或者包的名字,在此文件的同级文件夹下</p>
          <p>下面是个更复杂的例子,是从vue程序总抽取出来的:</p>
          <CodeEditor codeContent={codeAll.code3} height="1900px"/>
          <p>这里包含很多东西:</p>
          <ul>
            <li>name设置程序/包的名字</li>
            <li>version代表当前版本</li>
            <li>description是程序/包的简介</li>
            <li>main设置程序的入口文件</li>
            <li>private是true的话会组织程序/包不小心发布到npm上</li>
            <li>scripts定义了你可以运行的node脚本</li>
            <li>dependencies是npm包的集合</li>
            <li>devDependencies是开发时用的npm包的集合</li>
            <li>engines设置这个程序/包可以运行在node的哪个版本</li>
            <li>browserslist是说你希望支持哪个浏览器(版本)</li>
          </ul>
          <p>所有属性都会被npm或者我们使用的其他工具所用</p>
          <h2>属性分解说明</h2>
          <p></p>
          <p></p>

This section describes the properties you can use in detail. We refer to "package" 
but the same thing applies to local applications which you do not use as packages.

Most of those properties are only used on https://www.npmjs.com/, others by scripts 
that interact with your code, like npm or others.

name
Sets the package name.

Example:
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/ExecutePackage/" chooseItem={() => this.props.chooseItem('17')}/>
          <NextPage url="/node/PackageLockJson" chooseItem={() => this.props.chooseItem('19')}/>
        </div>
      </div>
    );
  }
}

export default PackageJson;