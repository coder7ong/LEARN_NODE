const Router = require("koa-router")
const userRouter = new Router({ prefix: "/users" })

const { createUser } = require("../controller/user.controller")

userRouter.post("/", createUser)

module.exports = userRouter
