const Koa = require("koa")
const axios = require("axios")

const app = new Koa()

// 定义中间件
const middleware1 = async (ctx, next) => {
  ctx.message = "aaa"
  // 由于是 await 所以会等待 middleware2 结束
  await next()
  ctx.body = ctx.message
}

const middleware2 = async (ctx, next) => {
  ctx.message += "bbb"
  // 由于是 await 所以会等待 middleware3 结束
  await next()
}

const middleware3 = async (ctx, next) => {
  // 使用异步数据   由于是 await 所以会等待网络请求结束
  const result = await axios.get("https://v.api.aa1.cn/api/yiyan/index.php")
  ctx.message += result.data
}

// 使用中间件
app.use(middleware1)
app.use(middleware2)
app.use(middleware3)

app.listen(3000, () => {
  console.log("server is running at port 3000")
})
