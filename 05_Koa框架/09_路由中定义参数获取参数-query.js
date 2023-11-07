const Koa = require("koa")
const Router = require("koa-router")

const app = new Koa()
const router = new Router({ prefix: "/users" })

router.get("/", async (ctx, next) => {
  console.log(ctx.request.query)
  ctx.body = "router query"
})

app.use(router.routes())

app.listen(3000, () => {
  console.log("server is running on port 3000")
})
