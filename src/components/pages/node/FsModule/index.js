import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class FsModule extends Component {
  componentDidMount() {
    this.props.chooseItem('46')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>fs模块</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank" href="https://nodejs.dev/learn/the-nodejs-fs-module">https://nodejs.dev/learn/the-nodejs-fs-module</a></p>
          <p>fs模块有很多非常有用的功能,可以访问文件系统,并进行交互</p>
          <p>作为node的核心模块,无需安装,require进来即可使用:</p>
          <CodeEditor codeContent={codeAll.code1} height="40px"/>
          <p>然后你就可以访问它的所有方法了:</p>
          <ul>
            <li>fs.access(): 检查文件夹是否存在,有它的权限node就可以访问(此句不通)</li>
            <li>fs.appendFile(): 将数据插入文件,如果文件不存在,就创建一个</li>
            <li>fs.chmod(): 根据传入的文件名来更改文件的权限.类似的还有fs.lchmod,fs.fchmod</li>
            <li>fs.chown(): 根据传入的文件名更改文件的所有者和组.类似的还有fs.fchown,fs.lchown</li>
            <li>fs.close(): 关闭文件描述符</li>
            <li>fs.copyFile(): 复制文件</li>
            <li>fs.createReadStream(): 建立可读的文件流</li>
            <li>fs.createWriteStream(): 建立可写的文件流</li>
            <li>fs.link(): 建一个新的关指向文件的硬链接</li>
            <li>fs.mkdir(): 新建文件夹</li>
            <li>fs.mkdtemp(): 新建临时文件夹</li>
            <li>fs.open(): 设置文件模式</li>
            <li>fs.readdir(): 读取目录的内容</li>
            <li>fs.readFile(): 读取文件的内容.相关的fs.read()</li>
            <li>fs.readlink(): 读取符号链接的值</li>
            <li>fs.realpath(): 将带有(. ..)的相对路径变为完整路径</li>
            <li>fs.rename(): 重命名文件或文件夹</li>
            <li>fs.rmdir(): 移除文件夹</li>
            <li>fs.stat(): 根据传入的文件名返回文件的状态.类似还有fs.fstat().fs.lstat()</li>
            <li>fs.symlink(): 创建一个指向文件的符号链接</li>
            <li>fs.truncate(): 根据传入的文件名定位文件,截取文件的特定长度,类似还有fs.ftruncate()</li>
            <li>fs.unlink(): 移除文件或符号链接</li>
            <li>fs.unwatchFile(): 停止监听文件的变化</li>
            <li>fs.utimes(): 根据传入的文件名改变文件的时间戳.类似还有fs.futimes()</li>
            <li>fs.watchFile(): 开始监听文件变化.类似还有fs.watch()</li>
            <li>fs.writeFile(): 写入文件.类似还有fa.write()</li>
          </ul>
          <p>fs模块的方法默认都是异步的,但加上Sync就变成同步了:</p>
          <ul>
            <li>fs.rename()</li>
            <li>fs.renameSync()</li>
            <li>fs.write()</li>
            <li>fs.writeSync()</li>
          </ul>
          <p>两者区别很大</p>
          <p>注意: node10有一个<a target="_blank" href="https://nodejs.org/api/fs.html#fs_fs_promises_api"> experimental support</a>
            的promise API
          </p>
          <p>来检测一下fs.rename(),异步API需要回调函数配合使用:</p>
          <CodeEditor codeContent={codeAll.code2} height="160px"/>
          <p>同步API这样使用,用try/catch来处理错误:</p>
          <CodeEditor codeContent={codeAll.code3} height="200px"/>
          <p>关键的就在于第二个例子中,脚本运行会被阻断直到文件操作成功</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/folder" chooseItem={() => this.props.chooseItem('45')}/>
          <NextPage url="/node/pathModule" chooseItem={() => this.props.chooseItem('47')}/>
        </div>
      </div>
    );
  }
}

export default FsModule;