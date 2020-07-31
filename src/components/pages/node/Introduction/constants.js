const httpContent = `const http = require('http')
const hostname = '127.0.0.1'
const port = process.env.PORT
const server = http.createServer((req, res) =>
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World!')
}})
server.listen(port, hostname, () => {
    console.log('Server running at http://\${hostname}:\${port}')
})`
  const statusContent = 'res.statusCode = 200'
  const headerContent = `res.setHeader('Content-Type', 'text/plain')`
  const resContent = "res.end('Hello World')"
  const liContent = [{
    href: 'https://adonisjs.com/',
    name: 'AdonisJs',
    description:':一个全栈框架,高度专注于开发者人体工程学,稳定性和信任性(这三个词为直译),是最快的node.js框架之一'
  }, {
    href: 'https://expressjs.com/',
    name: 'express',
    description:`:提供了最简单且很有效的方法来建立web服务,
    简单,灵活专注属于服务的核心特点是它成功的关键`
  }, {
    href: 'https://www.fastify.io/',
    name: 'Fastify',
    description:':一个web框架,以最少的开销和一个强大的插件架构提供最好的开发体验,也是最快的node.js框架之一'
  }, {
    href: 'https://hapi.dev/',
    name: 'hapi',
    description:':一个很丰富的用来建立应用程序和服务的框架,是开发者专注开发可复用的程序逻辑而不是重复造轮子'
  }, {
    href: 'https://koajs.com/',
    name: 'koa',
    description:`:同样由express的团队打造,旨在更简单,更小巧.基于多年的知识积累(此句是百度翻译),在不扰乱现有生态
    的情况下创建不兼容的更改(这句是直译)而诞生的新的项目`
  }, {
    href: 'https://loopback.io/',
    name: 'Loopback.io',
    description:':使得建立需要复杂集成功能的应用程序变得更简单'
  }, {
    href: 'https://www.meteor.com/',
    name: 'Meteor',
    description:`:一个异常强大的全栈框架,用同构方法(直译)激励你用JavaScript写app,同时运行在客户端和服务端.有现成的工具,
    集成了前端的框架react, vue,和angular.也能创建移动端app`
  }, {
    href: 'https://github.com/vercel/micro',
    name: 'Micro',
    description:':提供了一个轻量级的服务器建立异步的http微服务'
  }, {
    href: 'https://nestjs.com/',
    name: 'NestJS',
    description:':基于先进的node.js框架的typeScript,用于建立企业级高效,可信赖,可扩展的服务端应用程序'
  }, {
    href: 'https://nextjs.org/',
    name: 'Next.js',
    description:': React 服务端渲染应用框架'
  }, {
    href: '',
    name: 'Nx',
    description:':网页打不开,就不翻译了'
  }, {
    href: 'https://socket.io/',
    name: 'Socket.io',
    description:':实时通信引擎构建网络应用程序'
  }]
  export {
    httpContent,
    statusContent,
    headerContent,
    resContent,
    liContent
  }