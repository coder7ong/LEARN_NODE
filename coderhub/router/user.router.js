const Router = require("koa-router")
const userRouter = new Router({ prefix: "/users" })

const { createUser, avatarInfo } = require("../controller/user.controller")
// verifyUser 账号密码中间件，encryptPassword密码加密中间件
const { verifyUser, encryptPassword } = require("../middleware/user.middleware")

userRouter.post("/", verifyUser, encryptPassword, createUser)
// 获取用户头像
userRouter.get("/:userId/avatar", avatarInfo)

module.exports = userRouter
