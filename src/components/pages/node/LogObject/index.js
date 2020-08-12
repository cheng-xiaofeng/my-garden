import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
import log_1 from '../../../../images/log_1.png'
import log_2 from '../../../../images/log_2.png'

class LogObject extends Component {
  componentDidMount() {
    this.props.chooseItem('55')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>node中log一个对象</h1>
        <div className='articleConent'>
          <p>当console.log运行在浏览器中时,就可以看到:</p>
          <img style={{display: 'block', width: 600, height: 100}} src={log_1} alt=""/>
          <p>点击箭头,日志就会展开,可以很清楚的看到对象的属性:</p>
          <img style={{display: 'block', width: 600, height: 200}} src={log_2} alt=""/>
          <p>在node中,也可以这样</p>
          <p>当然不能是一模一样,手动运行node程序指挥将对象输出到shell,或者log文件.得到的只是
            代表对象的字符串
          </p>
          <p>现在只要层级不慎深就可以,两级嵌套之后,node就不会打印而是用[object]替代:</p>
          <CodeEditor codeContent={codeAll.code1} height="800px"/>
          <p>怎么打印出整个对象?</p>
          <p>最好的方式且可以保存优质的打印是:</p>
          <CodeEditor codeContent={codeAll.code2} height="40px"/>
          <p>2代表的是缩进的空格数量</p>
          <p>还可以:</p>
          <CodeEditor codeContent={codeAll.code3} height="60px"/>
          <p>但是对于嵌套超过2级的对象则会被摊平,对于复杂的对象这可能是个问题</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/errorHandling" chooseItem={() => this.props.chooseItem('54')}/>
        </div>
      </div>
    );
  }
}

export default LogObject;