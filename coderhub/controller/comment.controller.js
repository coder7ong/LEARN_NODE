const commentService = require("../service/comment.service")

class CommentController {
  async create(ctx, next) {
    const { momentId, content } = ctx.request.body
    const userId = ctx.user.id
    const result = await commentService.createComment(momentId, userId, content)
    ctx.body = result
  }

  // 回复评论
  async reply(ctx, next) {
    const { momentId, commentId, content } = ctx.request.body
    const userId = ctx.user.id
    const result = await commentService.replyComment(
      momentId,
      commentId,
      userId,
      content
    )
    ctx.body = result
  }

  // 更新评论
  async update(ctx, next) {
    const { commentId } = ctx.params
    const { content } = ctx.request.body
    const result = await commentService.updateComment(commentId, content)
    ctx.body = result
  }

  // 删除评论
  async deleteComment(ctx, next) {
    const { commentId } = ctx.params
    const result = await commentService.deleteCommentById(commentId)
    ctx.body = result
  }
}

module.exports = new CommentController()
