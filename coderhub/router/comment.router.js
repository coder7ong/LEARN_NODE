const Router = require("koa-router")
const { verifyToken } = require("../middleware/auth.middleware")
const {
  create,
  reply,
  update,
  deleteComment,
} = require("../controller/comment.controller")
const { verifyPermission } = require("../middleware/comment.middleware")

const commentRouter = new Router({ prefix: "/comment" })

// 新增评论
commentRouter.post("/", verifyToken, create)
// 回复评论
commentRouter.post("/reply", verifyToken, reply)
// 修改评论
commentRouter.patch("/:commentId", verifyToken, verifyPermission, update)
// 删除评论
commentRouter.delete(
  "/:commentId",
  verifyToken,
  verifyPermission,
  deleteComment
)

module.exports = commentRouter
