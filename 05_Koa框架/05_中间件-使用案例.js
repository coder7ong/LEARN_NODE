const Koa = require("koa")
// 创建 Koa 实例
const app = new Koa()

app.use((ctx, next) => {
  if (ctx.request.url === "/login") {
    if (ctx.request.method === "GET") {
      console.log("以 Get 方式请求 Login 接口")
    }
  } else {
    ctx.response.body = "other request"
  }
})

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/")
})
