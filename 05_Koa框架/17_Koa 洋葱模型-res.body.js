const Koa = require("koa")

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = "Hello middleware1"
  next()
})

app.use((ctx, next) => {
  ctx.body = "Hello middleware2"
  next()
})

app.use((ctx, next) => {
  ctx.body = "Hello middleware3"
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
