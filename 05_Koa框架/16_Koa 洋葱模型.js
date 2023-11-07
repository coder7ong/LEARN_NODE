const Koa = require("koa")
const app = new Koa()

// 第一个中间件
app.use(async (ctx, next) => {
  console.log("第一层洋葱 - 开始")
  await next()
  console.log("第一层洋葱 - 结束")
})

// 第二个中间件
app.use(async (ctx, next) => {
  console.log("第二层洋葱 - 开始")
  await next()
  console.log("第二层洋葱 - 结束")
})

// 第三个中间件
app.use(async (ctx) => {
  console.log("第三层洋葱")
  ctx.response.body = "Hello, World!"
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
