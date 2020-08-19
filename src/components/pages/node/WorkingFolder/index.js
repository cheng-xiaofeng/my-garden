import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class WorkingFolder extends Component {
  componentDidMount() {
    this.props.chooseItem('45')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>操作文件夹</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/working-with-folders-in-nodejs">https://nodejs.dev/learn/working-with-folders-in-nodejs</a></p>
          <p>node的fs核心模块有很多很方便的方法操作文件夹</p>
          <h2>检查文件夹是否存在</h2>
          <p>fs.access()检查文件夹是否存在,有它的权限node就可以访问(此句不通)</p>
          <h2>新建文件夹</h2>
          <p>fs.mkdir() 或 fs.mkdirSync()可以新建文件夹</p>
          <CodeEditor codeContent={codeAll.code1} height="280px"/>
          <h2>读取目录的内容</h2>
          <p>fs.readdir() 或 fs.readdirSync()读取文件夹内容</p>
          <p>这个例子是读取文件夹的内容,包括文件和子文件夹.然后返回它们的相对路径:</p>
          <CodeEditor codeContent={codeAll.code2} height="150px"/>
          <p>获取全部路径:</p>
          <CodeEditor codeContent={codeAll.code3} height="80px"/>
          <p>也可以筛选一下,只返回文件,排除文件夹:</p>
          <CodeEditor codeContent={codeAll.code4} height="220px"/>
          <h2>重命名文件夹</h2>
          <p>fs.rename() 或 fs.renameSync()重命名文件夹,第一个参数是当前路径,第二个参数是新的路径:</p>
          <CodeEditor codeContent={codeAll.code5} height="230px"/>
          <p>fs.renameSync()是同步版本:</p>
          <CodeEditor codeContent={codeAll.code6} height="180px"/>
          <h2>移除文件夹</h2>
          <p>fs.rmdir() 或 fs.rmdirSync()移除文件夹</p>
          <p>移除有内容的文件夹会比较复杂</p>
          <p>安装<a target="_blank"  rel="noopener noreferrer" href="https://www.npmjs.com/package/fs-extra">fs-extra</a>模块,很流行,维护的也很好.
            fs的替代模块,提供了更多的特性
          </p>
          <p>这种情况remove()技术你所需要的</p>
          <p>使用 npm install fs-extra, 这么使用:</p>
          <CodeEditor codeContent={codeAll.code7} height="180px"/>
          <p>也能和promises结合使用:</p>
          <CodeEditor codeContent={codeAll.code8} height="180px"/>
          <p>或者async/await也可以:</p>
          <CodeEditor codeContent={codeAll.code9} height="280px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/writingFile" chooseItem={() => this.props.chooseItem('44')}/>
          <NextPage url="/node/fsModule" chooseItem={() => this.props.chooseItem('46')}/>
        </div>
      </div>
    );
  }
}

export default WorkingFolder;