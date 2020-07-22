import Introduction from './pages/Introduction'
import BriefHistory from './pages/BriefHistory'
import InstallNode from './pages/InstallNode'
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
}]

export {
  routers
}