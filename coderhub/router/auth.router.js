const Router = require("koa-router")

const { login } = require("../controller/anth.controller")
const { verifyLogin } = require("../middleware/auth.middleware")

const authRouter = new Router()

// 插入校验中间件
authRouter.post("/login", verifyLogin, login)

// 导出路由
module.exports = authRouter
