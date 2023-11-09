const Router = require("koa-router")

const { login, success } = require("../controller/anth.controller")
const { verifyLogin, verifyToken } = require("../middleware/auth.middleware")

const authRouter = new Router()

// 插入校验中间件
authRouter.post("/login", verifyLogin, login)

// 测试接口 verifyToken为校验token中间件，success为校验token成功请求资源中间件
authRouter.get("/test", verifyToken, success)

// 导出路由
module.exports = authRouter
