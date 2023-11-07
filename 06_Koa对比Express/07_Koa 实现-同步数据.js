const Koa = require("koa")

const app = new Koa()
// 定义中间件
const middleware1 = async (ctx, next) => {
  ctx.message = "aaa"
  next()
  ctx.body = ctx.message
}

const middleware2 = (ctx, next) => {
  ctx.message += "bbb"
  next()
}

const middleware3 = (ctx, next) => {
  ctx.message += "ccc"
}

// 使用中间件
app.use(middleware1)
app.use(middleware2)
app.use(middleware3)

app.listen(3000, () => {
  console.log("server is running at port 3000")
})
