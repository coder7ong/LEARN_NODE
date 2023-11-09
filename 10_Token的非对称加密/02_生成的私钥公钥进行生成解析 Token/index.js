const Koa = require("koa")
const Router = require("koa-router")
const jwt = require("jsonwebtoken")
const fs = require("fs")

const app = new Koa()
const router = new Router()

const PRIVATE_KEY = fs.readFileSync("./keys/private.key")
const PUBLIC_KEY = fs.readFileSync("./keys/public.key")

router.post("/login", (ctx) => {
  const user = { id: 110, username: "7ong" }
  const token = jwt.sign(
    { id: user.id, username: user.username },
    PRIVATE_KEY,
    {
      expiresIn: "1h",
      algorithm: "RS256", //1. 默认算法是 HS265 使用非对称加密之后需要指定算法为 RS256
    }
  )
  ctx.body = { token }
})

router.get("/protected", (ctx) => {
  const token = ctx.request.headers.authorization.replace("Bearer ", "")
  try {
    const decoded = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"], //2. 指定算法，指定算法为数组格式即可以指定多种解密算法
    })
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
