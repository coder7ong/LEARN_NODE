const Koa = require("koa")

const userRouter = require("./router/user.js")

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = "Hello Koa"
  // 如果缺少 next() 就不执行下个中间件，直接结束
  next()
})

app.use(userRouter.routes())

app.listen(3000, () => {
  console.log("koa 服务器启动成功")
})
