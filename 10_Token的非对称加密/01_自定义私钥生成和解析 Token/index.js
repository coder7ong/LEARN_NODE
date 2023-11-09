const Koa = require("koa")
const Router = require("koa-router")

//1. 导入 jsonwebtoken
const jwt = require("jsonwebtoken")

const app = new Koa()
const router = new Router()

//2. 以硬编码方式设置一个秘钥
const SERCET_KEY = "abccba"

// 登录接口，验证用户名和密码后返回token
router.post("/login", (ctx) => {
  const user = { id: 110, username: "7ong" }
  //3. 生成token并返回给客户端
  const token = jwt.sign({ id: user.id, username: user.username }, SERCET_KEY, {
    expiresIn: "1h", // 过期时间
  })
  ctx.body = { token }
})

// 需要携带有效token才能访问
router.get("/protected", (ctx) => {
  //4. 通过 headers 获取 token
  const token = ctx.request.headers.authorization.replace("Bearer ", "")
  // jwt 验证失败之后直接抛出异常，如果没有使用 try 捕获异常则直接报错
  try {
    //5. 认证 token 是否正确
    const decoded = jwt.verify(token, SERCET_KEY)
    ctx.body = {
      message: "You have accessed the protected resource",
      user: decoded.username,
    }
  } catch (err) {
    ctx.status = 401
    ctx.body = { message: "Invalid token" }
  }
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000")
})
