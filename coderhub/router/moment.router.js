const Router = require("koa-router")

const {
  verifyToken,
  verifyPermission,
} = require("../middleware/auth.middleware")
const {
  create,
  detail,
  list,
  deleteMoment,
  deleteMoments,
  updateMoment,
} = require("../controller/moment.controller")

const momentRouter = new Router({ prefix: "/moment" })

momentRouter.post("/", verifyToken, create)

// 用户不登录也可以动态详情
momentRouter.get("/:momentId", detail)
// 查询多条动态详情
momentRouter.get("/", list)
// 删除某一条动态信息
momentRouter.delete("/:momentId", verifyToken, verifyPermission, deleteMoment)
// 删除多条动态信息
momentRouter.delete("/", verifyToken, deleteMoments)
// 修改动态
momentRouter.patch("/", verifyToken, verifyPermission, updateMoment)

module.exports = momentRouter
