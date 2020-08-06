import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import {
  code1,
  code2,
  code3,
  code4,
  code5,
  code6,
  code7,
  code8,
  code9,
  code10,
  code11
} from './constants'
class OutputInCommand extends Component {
  componentDidMount() {
    this.props.chooseItem('12')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>输出到命令行</h1>
        <div className='articleConent'>
          <h2>使用console模块输出</h2>
          <p>node.js提供了<a href="https://nodejs.org/api/console.html">console</a>模块,
            这个模块有许多有用的方法可以跟命令行互动
          </p>
          <p>基本上跟浏览器的console对象一样</p>
          <p>最基本也最常用的方法是console.log(),会在控制台打印出你传给它的字符串</p>
          <p>如果你传一个对象,会将对象渲染成字符串</p>
          <p>可以传多行变量给它,例如:</p>
          <CodeEditor codeContent={code1} height="80px"/>
          <p>node会将两个都打印出来</p>
          <p>我们也可以用占位符:</p>
          <p>例如</p>
          <CodeEditor codeContent={code2} height="40px"/>
          <ul>
            <li>%s将变量渲染为字符串</li>
            <li>%d将变量渲染为数字</li>
            <li>%i只渲染变量的整数部分</li>
            <li>%o将变量渲染为对象</li>
          </ul>
          <p>例如:</p>
          <CodeEditor codeContent={code3} height="40px"/>
          <h2>清除控制台</h2>
          <p>console.clear()会清除控制台(此方法取决于console的使用)</p>
          <h2>计算元素</h2>
          <p>console.count()是个很方便的方法</p>
          <p>输入一下代码:</p>
          <CodeEditor codeContent={code4} height="400px"/>
          <p>count会计算字符串打印的次数并打印出来</p>
          <p>你也可以计算苹果和橙子:</p>
          <CodeEditor codeContent={code5} height="220px"/>
          <h2>打印stack trace</h2>
          <p>有些情况我们打印出函数的call stack trace会很有用,也许可以回答你怎么接触到代码的某个片段这个问题</p>
          <p>使用console.trace()方法</p>
          <CodeEditor codeContent={code6} height="80px"/>
          <p>这回打印出stack trace.下面是REPL中的显示:</p>
          <CodeEditor codeContent={code7} height="290px"/>
          <h2>计算花费的时间</h2>
          <p>使用time()和timeend()方法可以看出一个函数运行需要多少时间:</p>
          <CodeEditor codeContent={code8} height="220px"/>
          <h2>标准输出和标准错误</h2>
          <p>console.log在控制台打印信息非常棒.这里是标准输出</p>
          <p>console.error打印标准错误的流</p>
          <p>在控制台不会出现,但在错误日志中会出现</p>
          <h2>给输出加颜色</h2>
          <p>你可以用转译序列给你的文本上色.转译序列就是代表颜色的一组字母</p>
          <p>比如:</p>
          <CodeEditor codeContent={code9} height="40px"/>
          <p>在REPL中试一下,会打出黄色的hi</p>
          <p>然而这时比较低级的方法.最简单的方式是使用库.<a href="https://github.com/chalk/chalk">Chalk</a>
          就是这样一个库,除了可以上色还一个加其他样式,比如字体加重,斜体或者下划线</p>
          <p>用npm装上Chalk后,就可以使用了:</p>
          <CodeEditor codeContent={code10} height="80px"/>
          <h2>使用chalk.yellow比记转译序列代码可简单多了.代码可读性也更强</h2>
          <p>点击上面的链接获取更多的例子</p>
          <h2>创建进度条</h2>
          <p><a href="https://www.npmjs.com/package/progress">Progress</a>这个可以在控制台创建进度条,这样安装</p>
          <p>这个片段创建了一个10步的进度条,每100毫秒完成一步.当进度条完成后清除定时器:</p>
          <CodeEditor codeContent={code11} height="240px"/>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/commandArguments" chooseItem={() => this.props.chooseItem('11')}/>
          <NextPage url="/node/acceptCommand" chooseItem={() => this.props.chooseItem('13')}/>
        </div>
      </div>
    );
  }
}

export default OutputInCommand;