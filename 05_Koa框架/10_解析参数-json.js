const Koa = require("koa")
const bodyParser = require("koa-bodyparser")

const app = new Koa()

// 使用 koa-bodyparser 中间件
app.use(bodyParser())

app.use(async (ctx, next) => {
  // 获取解析后的参数对象
  const body = ctx.request.body

  // 在处理函数中可以直接使用解析后的参数
  console.log(body)

  ctx.body = "Hello World"
})

app.listen(3000, () => {
  console.log("Server is running")
})
