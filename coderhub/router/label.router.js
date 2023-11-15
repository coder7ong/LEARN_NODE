const Router = require("koa-router")
const { verifyToken } = require("../middleware/auth.middleware")

const {
  create,
  list,
  momentLabelList,
} = require("../controller/label.controller.js")

const labelRouter = new Router({ prefix: "/label" })

// 新增标签
labelRouter.post("/", verifyToken, create)

// 获取标签列表
labelRouter.get("/", list)

// 获取动态下的标签列表
labelRouter.get("/momentLabel", momentLabelList)

module.exports = labelRouter
