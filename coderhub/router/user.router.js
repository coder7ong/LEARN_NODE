const Router = require("koa-router")
const userRouter = new Router({ prefix: "/users" })

const { createUser } = require("../controller/user.controller")
// 导入中间件
const { verifyUser } = require("../middleware/user.middleware")

// 添加拦截中间件 verifyUser
userRouter.post("/", verifyUser, createUser)

module.exports = userRouter
