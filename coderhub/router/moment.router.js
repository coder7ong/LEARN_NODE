const Router = require("koa-router")

const { verifyToken } = require("../middleware/auth.middleware")
const { create, detail, list } = require("../controller/moment.controller")

const momentRouter = new Router({ prefix: "/moment" })

momentRouter.post("/", verifyToken, create)

// 用户不登录也可以动态详情
momentRouter.get("/:momentId", detail)
// 查询多条动态详情
momentRouter.get("/", list)

module.exports = momentRouter
