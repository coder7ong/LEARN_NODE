const Koa = require("koa")

const app = new Koa()

app.use((ctx, next) => {
  ctx.status = 400
  ctx.res.setHeader("Content-Type", "text/plain")
  ctx.body = "Hello statusCode"
})

app.listen(3000, () => {
  console.log("server is starting at port 3000")
})
