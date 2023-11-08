const Router = require("koa-router")
const userRouter = new Router({ prefix: "/users" })

const { createUser } = require("../controller/user.controller")
// verifyUser 账号密码中间件，encryptPassword密码加密中间件
const { verifyUser, encryptPassword } = require("../middleware/user.middleware")

userRouter.post("/", verifyUser, encryptPassword, createUser)

module.exports = userRouter
