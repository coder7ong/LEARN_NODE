const Koa = require("koa")

// 创建 Koa 应用实例 Koa 为类 new 创建实例
const app = new Koa()

// 中间件1：记录请求日志
app.use(async (ctx, next) => {
  console.log(`URL: ${ctx.url}`) // 打印请求的 URL
  const start = Date.now() // 记录当前时间

  await next() // 调用下一个中间件

  const ms = Date.now() - start // 计算响应时间
  console.log(`Response time: ${ms}ms`) // 打印响应时间
})

// 中间件2：响应请求
app.use(async (ctx) => {
  ctx.body = "Hello, Koa!" // 设置响应内容为 "Hello, Koa!"
})

// 启动服务器，监听 3000 端口
app.listen(3000, () => {
  console.log("Server is running at port 3000")
})
