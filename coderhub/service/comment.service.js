const connection = require("../app/database")

class CommentService {
  async createComment(momentId, userId, content) {
    const statement = `INSERT INTO comment (moment_id, user_id, content) VALUES (?, ?, ?)`
    const [result] = await connection.execute(statement, [
      momentId,
      userId,
      content,
    ])
    return result
  }

  // 回复评论
  async replyComment(momentId, commentId, userId, content) {
    const statement = `INSERT INTO comment (moment_id,comment_id, user_id, content) VALUES (?, ?, ?, ?)`
    const [result] = await connection.execute(statement, [
      momentId,
      commentId,
      userId,
      content,
    ])
    return result
  }

  // 修改评论
  async updateComment(commentId, content) {
    const statement = `UPDATE comment SET content = ? WHERE id = ?`
    const [result] = await connection.execute(statement, [content, commentId])
    return result
  }

  // 删除评论
  async deleteCommentById(commentId) {
    const statement = `DELETE FROM comment WHERE id = ?`
    const [result] = await connection.execute(statement, [commentId])
    return result
  }

  // 验证权限
  async checkComment(commentId, userId) {
    const statement = `SELECT * FROM comment WHERE id = ? AND user_id = ?`
    const [result] = await connection.execute(statement, [commentId, userId])
    return result[0]
  }
}

module.exports = new CommentService()
