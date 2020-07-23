import Introduction from './pages/node/Introduction'
import BriefHistory from './pages/node/BriefHistory'
import InstallNode from './pages/node/InstallNode'
import MuchJS from './pages/node/MuchJS'
import TheDiffrences from './pages/node/TheDiffrences'
import Engine from './pages/node/Engine'
import RunNode from './pages/node/RunNode'
import ExitNode from './pages/node/ExitNode'
import ReadVariables from './pages/node/ReadVariables'
import UseREPL from './pages/node/UseREPL'
import CommandArguments from './pages/node/CommandArguments'
import OutputInCommand from './pages/node/OutputInCommand'
import AcceptCommand from './pages/node/AcceptCommand'
import ExportFunctionality from './pages/node/ExportFunctionality'
import IntroductionOfNpm from './pages/node/IntroductionOfNpm'
import WherePackages from './pages/node/WherePackages'
import ExecutePackage from './pages/node/ExecutePackage'
import PackageJson from './pages/node/PackageJson'
import PackageLockJson from './pages/node/PackageLockJson'
import FindVersion from './pages/node/FindVersion'
import OldVersion from './pages/node/OldVersion'
import UpdateVersion from './pages/node/UpdateVersion'
import SemanticVersion from './pages/node/SemanticVersion'
import UninstallPackage from './pages/node/UninstallPackage'
import GlobalOrlocally from './pages/node/GlobalOrlocally'
import Dependencies from './pages/node/Dependencies'
import Npx from './pages/node/Npx'
import EventLoop from './pages/node/EventLoop'
import NextTick from './pages/node/NextTick'
import SetImmediate from './pages/node/SetImmediate'
import Timer from './pages/node/Timer'
import CallbackFunction from './pages/node/CallbackFunction'
import PromiseFunction from './pages/node/PromiseFunction'
import AsyncFunction from './pages/node/AsyncFunction'
import EventEmitter from './pages/node/EventEmitter'
import BuildHttpServer from './pages/node/BuildHttpServer'
import PerformHttpRequest from './pages/node/PerformHttpRequest'
const routers = [{
  index: 1,
  name: 'node简介',
  to: '/',
  path: '/',
  component: Introduction
}, {
  index: 2,
  name: 'node简史',
  to: '/briefHistory',
  path: '/briefHistory',
  component: BriefHistory
}, {
  index: 3,
  name: '安装node',
  to: '/installNode',
  path: '/installNode',
  component: InstallNode
}, {
  index: 4,
  name: '所需知道的javaScript',
  to: '/muchJS',
  path: '/muchJS',
  component: MuchJS
}, {
  index: 5,
  name: 'node和浏览器的不同',
  to: '/diffrences',
  path: '/diffrences',
  component: TheDiffrences
}, {
  index: 6,
  name: 'v8引擎',
  to: '/v8Engine',
  path: '/v8Engine',
  component: Engine
}, {
  index: 7,
  name: '运行node脚本',
  to: '/runNode',
  path: '/runNode',
  component: RunNode
}, {
  index: 8,
  name: '退出node',
  to: '/exitNode',
  path: '/exitNode',
  component: ExitNode
}, {
  index: 9,
  name: '读取环境变量',
  to: '/readVariables ',
  path: '/readVariables',
  component: ReadVariables
}, {
  index: 10,
  name: '怎么使用REPL模式',
  to: '/useREPL',
  path: '/useREPL',
  component: UseREPL
}, {
  index: 11,
  name: '获取命令行的参数',
  to: '/commandArguments',
  path: '/commandArguments',
  component: CommandArguments
}, {
  index: 12,
  name: '在命令行输出',
  to: '/outputInCommand',
  path: '/outputInCommand',
  component: OutputInCommand
}, {
  index: 13,
  name: '接受命令行的输入',
  to: '/acceptCommand',
  path: '/acceptCommand',
  component: AcceptCommand
}, {
  index: 14,
  name: '输出功能模块',
  to: '/exportFunctionality',
  path: '/exportFunctionality',
  component: ExportFunctionality 
}, {
  index: 15,
  name: 'npm简介',
  to: '/introductionOfNpm',
  path: '/introductionOfNpm',
  component: IntroductionOfNpm
}, {
  index: 16,
  name: '在哪安装包',
  to: '/wherePackages',
  path: '/wherePackages',
  component: WherePackages
}, {
  index: 17,
  name: '如何执行包',
  to: '/executePackage',
  path: '/executePackage',
  component: ExecutePackage
}, {
  index: 18,
  name: '配置文件',
  to: '/packageJson',
  path: '/packageJson',
  component: PackageJson
}, {
  index: 19,
  name: 'packageLockJson',
  to: '/packageLockJson',
  path: '/packageLockJson',
  component: PackageLockJson
}, {
  index: 20,
  name: '查找包的版本',
  to: '/findVersion',
  path: '/findVersion',
  component: FindVersion
}, {
  index: 21,
  name: '安装旧版本的包',
  to: '/oldVersion',
  path: '/oldVersion',
  component: OldVersion
}, {
  index: 22,
  name: '升级到最新版本',
  to: '/updateVersion',
  path: '/updateVersion',
  component: UpdateVersion
}, {
  index: 23,
  name: '版本符号',
  to: '/semanticVersion',
  path: '/semanticVersion',
  component: SemanticVersion
}, {
  index: 24,
  name: '卸载包',
  to: '/uninstallPackage',
  path: '/uninstallPackage',
  component: UninstallPackage
}, {
  index: 25,
  name: '全局还是本地',
  to: '/globalOrlocally',
  path: '/globalOrlocally',
  component: GlobalOrlocally
}, {
  index: 26,
  name: '依赖与开发依赖',
  to: '/dependencies',
  path: '/dependencies',
  component: Dependencies
}, {
  index: 27,
  name: 'npx命令',
  to: '/npx',
  path: '/npx',
  component: Npx
}, {
  index: 28,
  name: '事件循环',
  to: '/eventLoop',
  path: '/eventLoop',
  component: EventLoop
}, {
  index: 29,
  name: '理解process.nextTick',
  to: '/nextTick',
  path: '/nextTick',
  component: NextTick
}, {
  index: 30,
  name: 'setImmediate',
  to: '/setImmediate',
  path: '/setImmediate',
  component: SetImmediate
}, {
  index: 31,
  name: '定时器',
  to: '/timer',
  path: '/timer',
  component: Timer
}, {
  index: 32,
  name: '异步编程与回调',
  to: '/callback',
  path: '/callback',
  component: CallbackFunction
}, {
  index: 33,
  name: 'promise',
  to: '/promise',
  path: '/promise',
  component: PromiseFunction
}, {
  index: 34,
  name: 'async await',
  to: '/async',
  path: '/async',
  component: AsyncFunction
}, {
  index: 35,
  name: '事件触发',
  to: '/eventEmitter',
  path: '/eventEmitter',
  component: EventEmitter
}, {
  index: 36,
  name: 'http服务',
  to: '/httpServer',
  path: '/httpServer',
  component: BuildHttpServer
}, {
  index: 37,
  name: 'http请求',
  to: '/httpRequest',
  path: '/httpRequest',
  component: PerformHttpRequest
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, {
  index: ,
  name: '',
  to: '/',
  path: '/',
  component: 
}, ]

export {
  routers
}