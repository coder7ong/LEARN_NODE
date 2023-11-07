const Koa = require("koa")
const app = new Koa()
const Router = require("koa-router")

const router = new Router({
  // 路由前缀
  prefix: "/users",
})

router.get("/:username", async (ctx, next) => {
  console.log("params" + ctx.params.username)
  ctx.body = "router params"
})

app.use(router.routes())

app.listen(3000, () => {
  console.log("server is running")
})
