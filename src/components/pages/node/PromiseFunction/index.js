import React, { Component } from 'react';
import { 
  ForwardPages,
  NextPage,
  CodeEditor
} from '../../../commonComponents'
import codeAll from './constants'
class PromiseFunction extends Component {
  componentDidMount() {
    this.props.chooseItem('33')
  }
  render() {
    return (
      <div>
        <h1 className='article-reader__headline'>理解js的Promises</h1>
        <div className='articleConent'>
          <p>原文地址: <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.dev/learn/understanding-javascript-promises">https://nodejs.dev/learn/understanding-javascript-promises</a></p>
          <h2>promises简介</h2>
          <CodeEditor codeContent={codeAll.code1} height="600px"/>
          <p>promise通常被定义成一个最终会被获取到的值得代理</p>
          <p>promises解决一步的一种方式,不会困在<a target="_blank"  rel="noopener noreferrer" href="http://callbackhell.com/">回调地狱中</a></p>
          <p>promises几年前成为js的一部分(2015年标准化并引入),最近和2017的Async/Await互相结合</p>
          <p>异步函数使用promises,所以理解promises是理解async和await的基础</p>
          <h2>简短的说一下promise怎么工作</h2>
          <p>promise被调用后就会处在pending状态.就是说,函数会继续执行,当promise从pending到resolve的
            状态,就会吧请求的数据(无论什么)返给函数
          </p>
          <p>promise最终会在resolved状态或者rejected状态结束,即将结束的时候回调用各自的回调函数(
            传给then和catch的函数)</p>
          <h2>哪些js API使用promise?</h2>
          <p>除了你的代码和一些库的代码,promises也被其他标准的webAPI使用:</p>
          <ul>
            <li>the Battery API</li>
            <li>the Fetch API</li>
            <li>Service Workers</li>
          </ul>
          <p>现在的js不可能说不用promises,所以现在我们开始深入去理解</p>
          <h2>创建promises</h2>
          <p>promise API会抛出一个promise构造函数,可以用new Promise()来初始化:</p>
          <CodeEditor codeContent={codeAll.code2} height="300px"/>
          <p>可以看到,promise检查done这个全局常量,是true的话,promise就进入resolved状态,
            (resolve的回调函数就会被调用);否则,就reject的回调函数执行,将promise置于rejected状态,
            (如果两个回调函数都没有被调用,promise就会停留在pending状态)
          </p>
          <p>使用resolve和reject,我们就能知道promise的结果的状态,就知道怎么去做了.上面,我们返回一个字符串,
            但也可以是一个对象,或者null.我们已经创建了promise,它已经在执行.这对理解下面的<a target="_blank"  rel="noopener noreferrer" href="#consumPromise">Consuming a promise</a>
            很重要
          </p>
          <p>你也可能见过Promisifying,使用js函数返回一个promise</p>
          <CodeEditor codeContent={codeAll.code3} height="460px"/>
          <p>注意: 在最近的node版本中,你不需要手动切换许多API. <a target="_blank"  rel="noopener noreferrer" href="https://nodejs.org/docs/latest-v11.x/api/util.html#util_util_promisify_original">util module</a>
            有promisifying函数会替你做.假定你promisifying的函数有签名
          </p>
          <h2 id="consumPromise">Consuming a promise</h2>
          <p>上面我们介绍了怎么创建promise</p>
          <p>现在来看看promise是怎么被consumed或使用的</p>
          <CodeEditor codeContent={codeAll.code4} height="340px"/>
          <p>运行checkIfItsDone()会有特定的函数执行,当isItDoneYet这个promise resolve(调用then)
            或reject(调用catch)
          </p>
          <h2>promise链</h2>
          <p>一个promise可以返回另一个promise创建promise链</p>
          <p>比较典型的例子就是Fetch API,我们用来获取资源,当获取到资源时将promise排队执行</p>
          <p>Fetch API基于promise机制,调用fetch()就像我们用new Promise()定义promise一样</p>
          <h2>promise链例子:</h2>
          <CodeEditor codeContent={codeAll.code5} height="500px"/>
          <p>这个例子中,我们用fetch获取到根目录下的todos.json文件的TODO列表,然后创建promise链</p>
          <p>运行fetch(),返回一个<a target="_blank"  rel="noopener noreferrer" href="https://fetch.spec.whatwg.org/#concept-response">response</a>,
            response有很多属性,这里是指:
          </p>
          <ul>
            <li>status: 一个数字代表http状态码</li>
            <li>statusText: 状态信息,成功的话就是 OK</li>
          </ul>
          <p>response还有一个json()方法,会返回一个resolve处理过的content的promise并转化成json对象</p>
          <p>这些promise多发生的事是:第一个promise是我们定义的,叫status(),它会检查response的status,
            如果不成功就reject promise
          </p>
          <p>这会跳过所有的promise直接到catch方法,将Request failed和错误信息以前打印出来</p>
          <p>如果成功,就会调用json()方法.前一个promise成功了,返回response对象,传给第二个promise</p>
          <p>这里,我们返回处理过的json数据,所以第三个promise会直接接收到json:</p>
          <CodeEditor codeContent={codeAll.code6} height="80px"/>
          <p>我们打印到控制台</p>
          <h2>处理错误</h2>
          <p>上面的例子中,promise链中有一个catch</p>
          <p>当promise链失败产生一个错误或promise被reject,控制就会走向最近的catch</p>
          <CodeEditor codeContent={codeAll.code7} height="340px"/>
          <h2>串联错误</h2>
          <p>如果catch内部产生一个错误,可以在插进去一个catch来处理,一次类推:</p>
          <CodeEditor codeContent={codeAll.code8} height="250px"/>
          <h2>Orchestrating promises(协调promise?)</h2>
          <h3>promise.all()</h3>
          <p>如果你需要同步不同的promises,Promise.all()可以帮你定义一个promise列表,当它们都resolve的时候执行:
          </p>
          <CodeEditor codeContent={codeAll.code9} height="260px"/>
          <p>es2015的解构赋值允许你这么做:</p>
          <CodeEditor codeContent={codeAll.code10} height="80px"/>
          <p>当然不需要一定是fetch,其他的promise均可</p>
          <h3>Promise.race()</h3>
          <p>当你传的第一个promiseresolve的时候,Promise.race就会运行,只运行回调一次,和第一个promise resolve
            的结果(有点像条件 || )
          </p>
          <CodeEditor codeContent={codeAll.code11} height="270px"/>
          <h2>共同错误</h2>
          <h3>Uncaught TypeError: undefined is not a promise(未捕捉到的类型错误: undefined不是一个promise)</h3>
          <p>如果出现这个错误,确保你用的是new Promise()而不只是Promise()</p>
          <h3>UnhandledPromiseRejectionWarning(未处理的promiserejection警告)</h3>
          <p>这意味着promise中调用rejected,但没有catch来处理错误.在then后面添加catch</p>
        </div>
        <div className="clickPage">
          <ForwardPages url="/node/callback" chooseItem={() => this.props.chooseItem('32')}/>
          <NextPage url="/node/async" chooseItem={() => this.props.chooseItem('34')}/>
        </div>
      </div>
    );
  }
}

export default PromiseFunction;