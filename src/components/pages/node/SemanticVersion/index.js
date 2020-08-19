import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
} from '../../../commonComponents'
class SemanticVersion extends Component {
  componentDidMount() {
    this.props.chooseItem('23')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>npm语义化版本控制</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/semantic-versioning-using-npm">https://nodejs.dev/learn/semantic-versioning-using-npm</a></p>
          <p>node包有一个好处就是都遵循语义化版本控制</p>
          <p>语义化版本概念很简单: 3个数字:x.y.z</p>
          <ul>
            <li>第一个数字是主版本号</li>
            <li>第二个是次版本号</li>
            <li>第三个是修订号</li>
          </ul>
          <p>发布新的版本,你不能按你的意愿随意更改数字,有规则的:</p>
          <ul>
            <li>有不兼容的API改变,改变主版本号</li>
            <li>添加功能,向后兼容,改变次版本号</li>
            <li>向后兼容的bug修复,改变修订号</li>
          </ul>
          <p>所有的编程语言都遵照这种惯例,整个系统都依赖这个,所以每个npm包都要遵守</p>
          <p>为什么如此重要?</p>
          <p>因为npm设定了一些升级包的规则</p>
          <p>使用这些符号表示:</p>
          <ul>
            <li>^: ^0.13.0,你想升级修订号版本和次版本,0.13.1和0.14.0均可</li>
            <li>~: ~0.13.3,你只想升级修订号版本,0.13.1可以,0.14.0不行</li>
            <li>&gt;: 接受任何大于指定版本号的版本</li>
            <li>&gt;=: 接受任何大于等于指定版本号的版本</li>
            <li>&lt;=: 接受任何小于等于指定版本号的版本</li>
            <li>&lt;: 接受任何小于指定版本号的版本</li>
            <li>=: 只接受特定版本</li>
            <li>-: 接受版本范围, 2.1.0-2.6.2</li>
            <li>||: 组合使用, &lt;2.1 || &gt;2.6</li>
          </ul>
          <p>可以组合使用标识符, 1.0.0 || &gt;=1.1.0 &lt;1.2.0,  就是要么是用1.0.1或者1.1.0以上1.2.0以下</p>
          <p>还有其他规则: </p>
          <ul>
            <li>没有标识: 只接受指定版本</li>
            <li>最新: 想使用最新版本</li>
          </ul>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/UpdateVersion" chooseItem={() => this.props.chooseItem('22')}/>
          <NextPage url="/node/UninstallPackage" chooseItem={() => this.props.chooseItem('24')}/>
        </div>
      </div>
    );
  }
}

export default SemanticVersion;