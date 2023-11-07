const Koa = require("koa")
const app = new Koa()

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    // Handle the error here
    ctx.status = err.status || 500
    ctx.body = err.message
  }
})

app.use(async (ctx, next) => {
  if (ctx.path === "/test") {
    throw new Error("Test error!")
  }

  ctx.body = "Hello World"
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
