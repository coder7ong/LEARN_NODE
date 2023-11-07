const Koa = require("koa")

const userRouter = require("./router/user.js")

const app = new Koa()

// 返回一个中间件函数，用于处理用户路由模块中定义的路由
app.use(userRouter.routes())
// 到请求方法没有在路由中定义的时候就会返回 Method Not Allowed
app.use(userRouter.allowedMethods())

app.listen(3000, () => {
  console.log("user-router is starting at port 3000")
})
