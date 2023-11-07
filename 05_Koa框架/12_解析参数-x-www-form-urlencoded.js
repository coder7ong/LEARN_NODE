const Koa = require("koa")
const bodyParser = require("koa-bodyparser")

const app = new Koa()

// 注册bodyParser中间件
app.use(bodyParser())

app.use((ctx, next) => {
  if (ctx.path === "/login" && ctx.method === "POST") {
    // 从请求体中解析出用户名和密码
    const { username, password } = ctx.request.body
    console.log(ctx.request.body)

    if (username === "admin" && password === "admin123") {
      ctx.cookies.set("username", username, {
        httpOnly: true, // 是否只用于 http 请求中获取
        expires: new Date("2023-11-01"), // 过期时间
      })
      ctx.body = "登录成功"
    } else {
      // 如果用户名或密码错误，跳转到登录页面
      ctx.body = "用户名或密码错误"
      ctx.redirect("/login")
    }
  }
})

app.listen(3000, () => {
  console.log("server starting at port 3000")
})
