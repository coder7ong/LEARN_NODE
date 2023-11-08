// 引入所需的模块
const Koa = require("koa")
const Router = require("@koa/router")
const koaCookie = require("koa-cookie")

// 创建 Koa 应用程序
const app = new Koa()
const router = new Router()

// 注册中间件来处理 cookie
app.use(koaCookie())

// 设置路由来设置 Cookie
router.get("/set-cookie", (ctx, next) => {
  // 设置名为 "username" 的 Cookie，值为 "john_doe"，并设置过期时间为30天
  ctx.cookies.set("username", "john_doe", {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  })

  // 发送包含 Cookie 的响应
  ctx.body = "Cookie has been set"
})

// 将路由注册到应用程序
app.use(router.routes())

// 启动服务器，监听端口
app.listen(3000, () => {
  console.log("Koa server is running on port 3000")
})
