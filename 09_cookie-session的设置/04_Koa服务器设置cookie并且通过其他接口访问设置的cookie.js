// 引入所需的模块
const Koa = require("koa")
const Router = require("@koa/router")
const koaCookie = require("koa-cookie")

// 创建 Koa 应用程序
const app = new Koa()
const router = new Router()

// 注册中间件来处理 cookie
app.use(koaCookie())

// 模拟用户登录成功后设置 Cookie 的路由
router.get("/login", (ctx) => {
  // 设置名为 "user-token" 的 Cookie，值为用户的 token，设置过期时间为1小时
  ctx.cookies.set("user-token", "user_token_value", {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
  })

  // 发送包含 Cookie 的响应
  ctx.body = "Login successful. Cookie has been set"
})

// 读取 Cookie 的路由 login和 read-cookie都属于 localhost:8080下面的同源地址 cookie 在同源地址下互通
router.get("/read-cookie", (ctx) => {
  // 从请求中获取名为 "user-token" 的 Cookie
  const userToken = ctx.cookies.get("user-token")

  if (userToken) {
    // 如果存在 "user-token" 的 Cookie，则返回对应的值
    ctx.body = "User token found: " + userToken
  } else {
    // 如果不存在 "user-token" 的 Cookie，则返回提示信息
    ctx.body = "User token not found"
  }
})

// 将路由注册到应用程序
app.use(router.routes())

// 启动服务器，监听端口
app.listen(3000, () => {
  console.log("Koa server is running on port 3000")
})
