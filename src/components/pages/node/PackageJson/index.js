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
          <CodeEditor codeContent={codeAll.code3} height="1950px"/>
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
          <p>这块区域描述的是你能使用的属性的细节.我们说是"package",其实也适用本地程序中不叫package
          但其同样作用的东西</p>
          <p>许多属性只用在<a href="https://www.npmjs.com/">这里</a>,其他的会和你的代码交互,比如npm</p>
          <h2>name</h2>
          <p>设置包的名称</p>
          <p>例如:</p>
          <CodeEditor codeContent={codeAll.code4} height="40px"/>
          <p>name必须少于214个字母,不能有空格,只能包含小写字母,-或者_</p>
          <p>这是因为包要发布到npm上,会根据这个属性生成它的URL</p>
          <p>如果你在github上发布这个包,那GitHub的仓库名是个很好的选择</p>
          <h2>author</h2>
          <p>列出包的作者名字</p>
          <p>比如:</p>
          <CodeEditor codeContent={codeAll.code5} height="80px"/>
          <p>或者这种格式:</p>
          <CodeEditor codeContent={codeAll.code6} height="190px"/>
          <h2>贡献者</h2>
          <p>跟author一样,这个项目可以有一个或者多个贡献者,是个数组</p>
          <p>例如:</p>
          <CodeEditor codeContent={codeAll.code7} height="100px"/>
          <p>也可以这样:</p>
          <CodeEditor codeContent={codeAll.code8} height="240px"/>
          <h2>bugs</h2>
          <p>链接到包的问题追踪系统,像GitHub的问题页面</p>
          <p>例子:</p>
          <CodeEditor codeContent={codeAll.code9} height="80px"/>
          <h2>homepage</h2>
          <p>设置包的主页</p>
          <p>例子:</p>
          <CodeEditor codeContent={codeAll.code10} height="80px"/>
          <h2>版本</h2>
          <p>表示当前包的版本</p>
          <p>例子:</p>
          <CodeEditor codeContent={codeAll.code11} height="40px"/>
          <p>这个属性后面跟的是语义化版本符号,也就是说这个版本总是有三个数字组成:x.x.x</p>
          <p>第一个数字是主版本,第二个是次版本号,第三个是修订号</p>
          <p>这些数字的意义是: 修复bug用修订号;向后兼容用次版本号;有重大改变用主版本号</p>
          <h2>license</h2>
          <p>表示包的证书</p>
          <p>例子:</p>
          <CodeEditor codeContent={codeAll.code12} height="40px"/>
          <h2>keywords</h2>
          <p>这个属性是个关键字数组,表示你的包能做什么</p>
          <p>例子:</p>
          <CodeEditor codeContent={codeAll.code13} height="140px"/>
          <p>这可以帮助人们在<a href="https://www.npmjs.com/">这里</a>找到相似的包</p>
          <h2>description</h2>
          <p>这个属性是包的简述</p>
          <p>例子:</p>
          <CodeEditor codeContent={codeAll.code14} height="40px"/>
          <p>如果你想吧包发布到npm,这个属性就会很有用,人们会知道这个包是关于什么的</p>
          <h2>repository</h2>
          <p>这个属性表示这个包的仓库在哪</p>
          <p>例子:</p>
          <CodeEditor codeContent={codeAll.code15} height="40px"/>
          <p>注意gitHub前缀,还有其他的一些前缀</p>
          Notice the github prefix. There are other popular services baked in:
          <CodeEditor codeContent={codeAll.code16} height="40px"/>
          <CodeEditor codeContent={codeAll.code17} height="40px"/>
          <p>你可以很明确的设置版本控制系统:</p>
          <CodeEditor codeContent={codeAll.code18} height="110px"/>
          <p>也可以使用不同的版本控制系统:</p>
          <CodeEditor codeContent={codeAll.code19} height="110px"/>
          <h2>main</h2>
          <p>设置包的入口文件</p>
          <p>当你引入这个包的时候,程序就在这儿开始搜索抛出的模块</p>
          <p>例如:</p>
          <CodeEditor codeContent={codeAll.code20} height="40px"/>
          <h2>private</h2>
          <p>如果设为true,可以防止包意外发布到npm</p>
          <p>例子:</p>
          <CodeEditor codeContent={codeAll.code21} height="40px"/>
          <h2>scripts</h2>
          <p>定义可以运行的node脚本</p>
          <p>例子:</p>
          <CodeEditor codeContent={codeAll.code22} height="240px"/>
          <p>这些是命令行程序,用npm run xxx或yarn xxx启动,xxx是命令名称.比如: npm run dev</p>
          <p>你也可以自定义名称,scripts可以做任何你想做的事</p>
          <h2>dependencies</h2>
          <p>罗列出依赖的包</p>
          <p>下载包用npm或者yarn</p>
          <CodeEditor codeContent={codeAll.code23} height="60px"/>
          <p>包会自动插入到这个列表</p>
          <p>比如:</p>
          <CodeEditor codeContent={codeAll.code24} height="60px"/>
          <h2>devDependencies</h2>
          <p>罗列出开发依赖的包</p>
          <p>跟dependencies的区别是他们只在开发环境,不需要在生产环境</p>
          <p>下载包用npm或者yarn</p>
          <CodeEditor codeContent={codeAll.code25} height="60px"/>
          <p>包会自动插入到这个列表</p>
          <p>比如:</p>
          <CodeEditor codeContent={codeAll.code26} height="80px"/>
          <h2>engines</h2>
          <p>设置这个package/app运行在哪个版本的node</p>
          <p>例如:</p>
          <CodeEditor codeContent={codeAll.code27} height="130px"/>
          <h2>browserslist</h2>
          <p>说明你想支持的浏览器和版本,被Babel, Autoprefixer和其他工具引用,给浏览器添加所需的回调等东西</p>
          <p>例如:</p>
          <CodeEditor codeContent={codeAll.code28} height="130px"/>
          <p>这个配置说明你想支持至少1%使用率(<a href="https://caniuse.com/">CanIUse.com</a>)的所有浏览器最新的两个版本,除了IE8及以下</p>
          <a href="https://www.npmjs.com/package/browserslist">(查看更多)</a>
          <h2>Command-specific properties</h2>
          <p>package.json文件也能持有特定命令配置,比如Babel, ESLint等</p>
          <p>每个都有一个特定属性,像eslintConfig, babel.这些都是特定命令,你可以在各自的command/project文件中找到他们的用法</p>  
          <h2>包的版本</h2>
          <p>在上面你见过版本数字了:~3.0.0 或 ^0.13.0. 它们是什么意思,你将使用其他的哪个版本标识符?</p>
          <p>标识符来自dependency,更新包的时候用的</p>
          <p>语义化版本号有三个数字,第一个代表主版本号,第二个代表次版本号,第三个代表修订号,遵循以下规则:</p>
          <ul>
            <li>~: ~0.13.3,你只想升级修订号版本,0.13.1可以,0.14.0不行</li>
            <li>^: ^0.13.0,你想升级修订号版本和次版本,0.13.1和0.14.0均可</li>
            <li>*: *, 更新所有包括主版本</li>
            <li>&gt;: 接受任何大于指定版本号的版本</li>
            <li>&gt;=: 接受任何大于等于指定版本号的版本</li>
            <li>&lt;=: 接受任何小于等于指定版本号的版本</li>
            <li>&lt;: 接受任何小于指定版本号的版本</li>
          </ul>
          <p>还有其他规则: </p>
          <ul>
            <li>没有标识: 只接受指定版本</li>
            <li>最新: 想使用最新版本</li>
          </ul>
          <p>可以组合使用标识符, 1.0.0 || &gt;=1.1.0 &lt;1.2.0,  就是要么是用1.0.1或者1.1.0以上1.2.0以下</p>
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