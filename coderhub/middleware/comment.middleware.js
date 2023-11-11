const commentService = require("../service/comment.service")
const errorTypes = require("../constants/error-types")

const verifyPermission = async (ctx, next) => {
  const userId = ctx.user.id
  const commentId = ctx.params.commentId || ctx.request.body.commentId
  try {
    const isPermission = await commentService.checkComment(commentId, userId)
    if (!isPermission) {
      const error = new Error(errorTypes.UNPERMISSION)
      return ctx.app.emit("error", error, ctx)
    }
  } catch (err) {
    console.log(err)
  }

  await next()
}

module.exports = {
  verifyPermission,
}
