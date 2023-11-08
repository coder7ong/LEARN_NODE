const Koa = require("koa")
const session = require("koa-session")
const KoaRouter = require("koa-router")

const app = new Koa()
const router = new KoaRouter()

// 配置项
const CONFIG = {
  key: "koa.sess", // 会话 cookie 键名
  maxAge: 86400000, // 会话过期时间，单位毫秒
  autoCommit: true, // 自动提交报头
  overwrite: true, // 是否覆盖设置
  httpOnly: true, // 仅 HTTP 访问
  signed: true, // 使用加密签名
  rolling: false, // 强制刷新会话
  renew: false, // 自动续订
  secure: false, // 安全 cookie
  sameSite: null, // SameSite 属性
}

// 使用 session 中间件，并传入配置项，数组中可以传入多个数据，用于加盐
app.keys = ["some secret hurr"] // 用于对会话进行加盐操作
// 使用 session 中间件，并传入配置项
app.use(session(CONFIG, app))

// 设置路由
router.get("/setSession", async (ctx) => {
  // 设置 session
  ctx.session.user = { name: "Alice" }
  ctx.body = "Session set"
})

router.get("/getSession", async (ctx) => {
  // 获取 session
  ctx.body = "Hello, " + ctx.session.user.name
})

app.use(router.routes())

app.listen(3000, () => {
  console.log("Koa server is running on port 3000")
})
