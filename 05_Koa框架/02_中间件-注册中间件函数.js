const Koa = require("koa")

const app = new Koa()

// 中间件函数，用于记录请求的 URL 和响应时间
app.use(async (ctx, next) => {
  console.log(`URL: ${ctx.url}`) // 打印请求的 URL
  const start = Date.now() // 记录当前时间

  await next() // 调用下一个中间件

  const ms = Date.now() - start // 计算响应时间
  console.log(`Response time: ${ms}ms`) // 打印响应时间
})

app.listen(3000, () => {
  console.log("Server started")
})
