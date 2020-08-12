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
        <div className='articleConent'>
          <p>原文地址: <a target="_blank" href="https://nodejs.dev/learn/the-package-lock-json-file">https://nodejs.dev/learn/the-package-lock-json-file</a></p>
          <p>在版本5中,npm引入了package-lock.json文件</p>
          <p>这是什么?你已经知道了package.json文件,这个更常见,存在的时间也更长</p>
          <p>这个文件的目的是追踪下载的包的精准版本,确保产品可以用同样的方法再生产即使包被升级了</p>
          <p>这解决了package.json没有解决的问题,在package.json中,你可以设置想升级的版本,比如:</p>
          <ul>
            <li>~0.13.0,就是升级修订号版本,0.13.1可以,0.14.0不行</li>
            <li>^0.13.0,升级次版本号和修订号,0.13.1和0.14.0都可</li>
            <li>0.13.0,只能使用这个版本</li>
          </ul>
          <p>node-modules文件夹一般都比较大,不会commit它.当你复制项目,用npm install安装包的时候,如果有~符号,
            一个修订号版本又刚好发布,那就会下载这个版本,^符号和次版本号也是一样
          </p>
          <p>注意: 如果你指定了特定了版本号,想0.13.0,就不会有这个问题</p>
          <p>可能是你,也可能是地球的另一端的某个人通过npm install初始化项目</p>
          <p>原有的项目和最新初始化的项目肯定是不同的,即使只是一个次版本或修订号不会有很大的变化,
            但出现bug还是有可能的
          </p>
          <p>package-lock.json文件会锁定当前包的版本,运行npm install会使用那些特定的版本</p>
          <p>这个概念并不新颖,其他的编程语言中已经使用很多年了(想php的composer)</p>
          <p>如果项目是公开的,或你有同伴,或使用git部署,package-lock.json需要commit到git仓库,
            这样其他人就能fetch到
          </p>
          <p>运行npm update会更新package-lock.json文件的依赖</p>
          <h2>例子</h2>
          <p>这是一个package-lock.json的文件结构,当我们在空文件夹中运行npm install cowsay:</p>
          <CodeEditor codeContent={code1} height="2050px"/>
          <p>cowsay的依赖:</p>
          <ul>
            <li>get-stdin</li>
            <li>optimist</li>
            <li>string-width</li>
            <li>strip-eof</li>
          </ul>
          <p>反过来,那些包也会需要其他的包,可以从require属性中看到:</p>
          <ul>
            <li>ansi-regex</li>
            <li>is-fullwidth-code-point</li>
            <li>minimist</li>
            <li>wordwrap</li>
            <li>strip-eof</li>
          </ul>
          <p>他们按字母顺序加入到文件中,每个都有version字段,resolved字段(指向包的地址),
          integrity字段(核实包)
          </p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/PackageJson/" chooseItem={() => this.props.chooseItem('18')}/>
          <NextPage url="/node/FindVersion" chooseItem={() => this.props.chooseItem('20')}/>
        </div>
      </div>
    );
  }
}

export default PackageLockJson;