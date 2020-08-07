import Introduction from './pages/node/Introduction/'
import BriefHistory from './pages/node/BriefHistory/'
import InstallNode from './pages/node/InstallNode/'
import MuchJS from './pages/node/MuchJS/'
import TheDiffrences from './pages/node/TheDiffrences/'
import Engine from './pages/node/Engine/'
import RunNode from './pages/node/RunNode/'
import ExitNode from './pages/node/ExitNode/'
import ReadVariables from './pages/node/ReadVariables/'
import UseREPL from './pages/node/UseREPL/'
import CommandArguments from './pages/node/CommandArguments/'
import OutputInCommand from './pages/node/OutputInCommand/'
import AcceptCommand from './pages/node/AcceptCommand/'
import ExportFunctionality from './pages/node/ExportFunctionality/'
import IntroductionOfNpm from './pages/node/IntroductionOfNpm/'
import WherePackages from './pages/node/WherePackages/'
import ExecutePackage from './pages/node/ExecutePackage/'
import PackageJson from './pages/node/PackageJson/'
import PackageLockJson from './pages/node/PackageLockJson/'
import FindVersion from './pages/node/FindVersion/'
import OldVersion from './pages/node/OldVersion/'
import UpdateVersion from './pages/node/UpdateVersion/'
import SemanticVersion from './pages/node/SemanticVersion/'
import UninstallPackage from './pages/node/UninstallPackage/'
import GlobalOrlocally from './pages/node/GlobalOrlocally/'
import Dependencies from './pages/node/Dependencies/'
import Npx from './pages/node/Npx/'
import EventLoop from './pages/node/EventLoop/'
import NextTick from './pages/node/NextTick/'
import SetImmediate from './pages/node/SetImmediate/'
import Timer from './pages/node/Timer/'
import CallbackFunction from './pages/node/CallbackFunction/'
import PromiseFunction from './pages/node/PromiseFunction/'
import AsyncFunction from './pages/node/AsyncFunction/'
import EventEmitter from './pages/node/EventEmitter/'
import BuildHttpServer from './pages/node/BuildHttpServer/'
import PerformHttpRequest from './pages/node/PerformHttpRequest/'
import PerformPostRequest from './pages/node/PerformPostRequest/'
import RequestBody from './pages/node/RequestBody/'
import FileDescriptor from './pages/node/FileDescriptor/'
import FileStats from './pages/node/FileStats/'
import FilePath from './pages/node/FilePath/'
import ReadingFile from './pages/node/ReadingFile/'
import WritingFile from './pages/node/WritingFile/'
import WorkingFolder from './pages/node/WorkingFolder/'
import FsModule from './pages/node/FsModule/'
import PathModule from './pages/node/PathModule/'
import OSModule from './pages/node/OSModule/'
import EventsModule from './pages/node/EventsModule/'
import HttpModule from './pages/node/HttpModule/'
import BufferData from './pages/node/BufferData/'
import StreamData from './pages/node/StreamData/'
import EnvironmentDiffrence from './pages/node/EnvironmentDiffrence/'
import HandlingError from './pages/node/HandlingError/'
import LogObject from './pages/node/LogObject/'
const routers = [{
  index: '1',
  name: 'node简介',
  to: '/node',
  path: '/node',
  component: Introduction
}, {
  index: '2',
  name: 'node简史',
  to: '/node/briefHistory',
  path: '/node/briefHistory',
  component: BriefHistory
}, {
  index: '3',
  name: '安装node',
  to: '/node/installNode',
  path: '/node/installNode',
  component: InstallNode
}, {
  index: '4',
  name: '所需知道的javaScript',
  to: '/node/muchJS',
  path: '/node/muchJS',
  component: MuchJS
}, {
  index: '5',
  name: 'node和浏览器的不同',
  to: '/node/diffrences',
  path: '/node/diffrences',
  component: TheDiffrences
}, {
  index: '6',
  name: 'v8引擎',
  to: '/node/v8Engine',
  path: '/node/v8Engine',
  component: Engine
}, {
  index: '7',
  name: '运行node脚本',
  to: '/node/runNode',
  path: '/node/runNode',
  component: RunNode
}, {
  index: '8',
  name: '退出node',
  to: '/node/exitNode',
  path: '/node/exitNode',
  component: ExitNode
}, {
  index: '9',
  name: '读取环境变量',
  to: '/node/readVariables',
  path: '/node/readVariables',
  component: ReadVariables
}, {
  index: '10',
  name: '怎么使用REPL模式',
  to: '/node/useREPL',
  path: '/node/useREPL',
  component: UseREPL
}, {
  index: '11',
  name: '获取命令行的参数',
  to: '/node/commandArguments',
  path: '/node/commandArguments',
  component: CommandArguments
}, {
  index: '12',
  name: '在命令行输出',
  to: '/node/outputInCommand',
  path: '/node/outputInCommand',
  component: OutputInCommand
}, {
  index: '13',
  name: '接受命令行的输入',
  to: '/node/acceptCommand',
  path: '/node/acceptCommand',
  component: AcceptCommand
}, {
  index: '14',
  name: '抛出功能',
  to: '/node/exportFunctionality',
  path: '/node/exportFunctionality',
  component: ExportFunctionality 
}, {
  index: '15',
  name: 'npm简介',
  to: '/node/introductionOfNpm',
  path: '/node/introductionOfNpm',
  component: IntroductionOfNpm
}, {
  index: '16',
  name: '在哪安装包',
  to: '/node/wherePackages',
  path: '/node/wherePackages',
  component: WherePackages
}, {
  index: '17',
  name: '如何执行包',
  to: '/node/executePackage',
  path: '/node/executePackage',
  component: ExecutePackage
}, {
  index: '18',
  name: '配置文件',
  to: '/node/packageJson',
  path: '/node/packageJson',
  component: PackageJson
}, {
  index: '19',
  name: 'packageLockJson',
  to: '/node/packageLockJson',
  path: '/node/packageLockJson',
  component: PackageLockJson
}, {
  index: '20',
  name: '查找包的版本',
  to: '/node/findVersion',
  path: '/node/findVersion',
  component: FindVersion
}, {
  index: '21',
  name: '安装旧版本的包',
  to: '/node/oldVersion',
  path: '/node/oldVersion',
  component: OldVersion
}, {
  index: '22',
  name: '升级到最新版本',
  to: '/node/updateVersion',
  path: '/node/updateVersion',
  component: UpdateVersion
}, {
  index: '23',
  name: '版本符号',
  to: '/node/semanticVersion',
  path: '/node/semanticVersion',
  component: SemanticVersion
}, {
  index: '24',
  name: '卸载包',
  to: '/node/uninstallPackage',
  path: '/node/uninstallPackage',
  component: UninstallPackage
}, {
  index: '25',
  name: '全局还是本地',
  to: '/node/globalOrlocally',
  path: '/node/globalOrlocally',
  component: GlobalOrlocally
}, {
  index: '26',
  name: '依赖与开发依赖',
  to: '/node/dependencies',
  path: '/node/dependencies',
  component: Dependencies
}, {
  index: '27',
  name: 'npx命令',
  to: '/node/npx',
  path: '/node/npx',
  component: Npx
}, {
  index: '28',
  name: '事件循环',
  to: '/node/eventLoop',
  path: '/node/eventLoop',
  component: EventLoop
}, {
  index: '29',
  name: '理解process.nextTick',
  to: '/node/nextTick',
  path: '/node/nextTick',
  component: NextTick
}, {
  index: '30',
  name: 'setImmediate',
  to: '/node/setImmediate',
  path: '/node/setImmediate',
  component: SetImmediate
}, {
  index: '31',
  name: '定时器',
  to: '/node/timer',
  path: '/node/timer',
  component: Timer
}, {
  index: '32',
  name: '异步编程与回调',
  to: '/node/callback',
  path: '/node/callback',
  component: CallbackFunction
}, {
  index: '33',
  name: 'promise',
  to: '/node/promise',
  path: '/node/promise',
  component: PromiseFunction
}, {
  index: '34',
  name: 'async await',
  to: '/node/async',
  path: '/node/async',
  component: AsyncFunction
}, {
  index: '35',
  name: '事件触发',
  to: '/node/eventEmitter',
  path: '/node/eventEmitter',
  component: EventEmitter
}, {
  index: '36',
  name: 'http服务',
  to: '/node/httpServer',
  path: '/node/httpServer',
  component: BuildHttpServer
}, {
  index: '37',
  name: 'http请求',
  to: '/node/httpRequest',
  path: '/node/httpRequest',
  component: PerformHttpRequest
}, {
  index: '38',
  name: 'post请求',
  to: '/node/postRequest',
  path: '/node/postRequest',
  component: PerformPostRequest
}, {
  index: '39',
  name: 'request body',
  to: '/node/requestBody',
  path: '/node/requestBody',
  component: RequestBody
}, {
  index: '40',
  name: '文件描述符',
  to: '/node/fileDescriptor',
  path: '/node/fileDescriptor',
  component: FileDescriptor
}, {
  index: '41',
  name: 'stats',
  to: '/node/stats',
  path: '/node/stats',
  component: FileStats
}, {
  index: '42',
  name: '文件路径',
  to: '/node/filePath',
  path: '/node/filePath',
  component: FilePath
}, {
  index: '43',
  name: '读取文件',
  to: '/node/readingFile',
  path: '/node/readingFile',
  component: ReadingFile
}, {
  index: '44',
  name: '写入文件',
  to: '/node/writingFile',
  path: '/node/writingFile',
  component: WritingFile
}, {
  index: '45',
  name: '操作文件夹',
  to: '/node/folder',
  path: '/node/folder',
  component: WorkingFolder
}, {
  index: '46',
  name: 'fs模块',
  to: '/node/fsModule',
  path: '/node/fsModule',
  component: FsModule
}, {
  index: '47',
  name: 'path模块',
  to: '/node/pathModule',
  path: '/node/pathModule',
  component: PathModule
}, {
  index: '48',
  name: 'os模块',
  to: '/node/osModule',
  path: '/node/osModule',
  component: OSModule
}, {
  index: '49',
  name: 'events模块',
  to: '/node/eventsModule',
  path: '/node/eventsModule',
  component: EventsModule
}, {
  index: '50',
  name: 'http模块',
  to: '/node/httpModule',
  path: '/node/httpModule',
  component: HttpModule
}, {
  index: '51',
  name: 'buffer',
  to: '/node/buffer',
  path: '/node/buffer',
  component: BufferData
}, {
  index: '52',
  name: 'stream',
  to: '/node/stream',
  path: '/node/stream',
  component: StreamData
}, {
  index: '53',
  name: '开发与生产环境',
  to: '/node/environmentDiffrence',
  path: '/node/environmentDiffrence',
  component: EnvironmentDiffrence
}, {
  index: '54',
  name: '错误处理',
  to: '/node/errorHandling',
  path: '/node/errorHandling',
  component: HandlingError
}, {
  index: '55',
  name: 'log',
  to: '/node/logObject',
  path: '/node/logObject',
  component: LogObject
}, ]
export {
  routers,
}