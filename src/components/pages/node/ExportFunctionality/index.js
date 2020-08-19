import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import { code1, code2, code3, code4, code5, code6} from './constants'
class ExportFunctionality extends Component {
  componentDidMount() {
    this.props.chooseItem('14')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>使用exports抛出功能</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/expose-functionality-from-a-nodejs-file-using-exports">https://nodejs.dev/learn/expose-functionality-from-a-nodejs-file-using-exports</a></p>
          <p>node有一个内建模块</p>
          <p>node文件可以引进其他node文件抛出的功能</p>
          <p>想引进就使用:</p>
          <CodeEditor codeContent={code1} height="40px"/>
          <p>引进同个文件夹下的library.js文件的功能</p>
          <p>在这个文件,功能一定要先抛出才能被其他文件引入</p>
          <p>这个文件定义的其他对象或者变量都是私有的不会暴露给外在世界</p>
          <p>这是<a target="_blank"  rel="noopener noreferrer" href="https://nodejs.org/api/modules.html">模块系统</a>的module.exportAPI,允许我们可以这么做</p>
          <p>当你给你exports对象添加一个对象或者函数作为它的属性,就是要被抛出的东西,可以被其他的程序引入</p>
          <p>有两种方法</p>
          <p>第一个是给由模块系统提供的module.exports赋值一个对象,它可以只抛出一个对象:</p>
          <CodeEditor codeContent={code2} height="260px"/>
          <p>第二个方法是给exports对象添加属性,这样你就可以抛出多个对象,函数或者数据:</p>
          <CodeEditor codeContent={code3} height="160px"/>
          <p>或者直接这样:</p>
          <CodeEditor codeContent={code4} height="110px"/>
          <p>在其他文件,你可以定义一个变量来使用它:</p>
          <CodeEditor codeContent={code5} height="60px"/>
          <p>或者:</p>
          <CodeEditor codeContent={code6} height="40px"/>
          <p>module.exports和exports有什不一样呢?</p>
          <p>第一个抛出的是它指向的对象,第二个抛出的是它指向的属性.
          module.exports就是对象car,可以直接访问car的属性,而exports则是先要访问exports的属性car,然后才能
          访问car的属性
          </p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/AcceptCommand/" chooseItem={() => this.props.chooseItem('13')}/>
          <NextPage url="/node/IntroductionOfNpm/" chooseItem={() => this.props.chooseItem('15')}/>
        </div>
      </div>
    );
  }
}

export default ExportFunctionality;