const Koa = require("koa")
const app = new Koa()

app.use(async (ctx, next) => {
  console.log(ctx.request.url)
  console.log(ctx.request.query)
  console.log(ctx.request.params)
  ctx.response.body = "hello world"
})

app.listen(3000, () => {
  console.log("server is running")
})
