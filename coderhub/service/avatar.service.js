const connection = require("../app/database")

class AvatarService {
  async createAvatar(mimetype, filename, size, userId) {
    const statement = `INSERT INTO avatar (mimetype, filename, size, user_id) VALUES (?, ?, ?, ?)`
    const [result] = await connection.execute(statement, [
      mimetype,
      filename,
      size,
      userId,
    ])
    return result
  }

  // 根据用户ID查询用户头像数据
  async getAvatarByUserId(userId) {
    const statement = `SELECT * FROM avatar WHERE user_id = ?`
    const [result] = await connection.execute(statement, [userId])
    return result[0]
  }

  // 上传图片
  async createFile(filename, mimetype, size, userId, momentId) {
    const statement = `INSERT INTO file (filename, mimetype, size, user_id, moment_id) VALUES (?, ?, ?, ?, ?)`
    const [result] = await connection.execute(statement, [
      filename,
      mimetype,
      size,
      userId,
      momentId,
    ])
    return result
  }

  // 根据 fileName 查询图片信息
  async getFileInfoByFilename(filename) {
    const statement = `SELECT * FROM file WHERE filename = ?`
    const [result] = await connection.execute(statement, [filename])
    return result[0]
  }
}

module.exports = new AvatarService()
