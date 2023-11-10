const connection = require("../app/database")

class MomentService {
  async create(userId, content) {
    const statement = `INSERT INTO moment (user_id,content) VALUES (?,?)`
    const result = await connection.query(statement, [userId, content])
    return result
  }

  async getMomentById(id) {
    const statement = `
      SELECT
        m.id AS id, m.content AS content, m.createAt AS createTime, m.updateAt AS updateTime,
        JSON_OBJECT('id', u.id, 'name', u.username) AS user
      FROM moment m
      LEFT JOIN coderhub_users u ON m.user_id = u.id
      WHERE m.id = ?;
      `
    const [result] = await connection.execute(statement, [id])
    return result[0]
  }

  async getMomentList(offset, size) {
    const statement = `
      SELECT
        m.id AS id, m.content AS content, m.createAt AS createTime, m.updateAt AS updateTime,
        JSON_OBJECT('id', u.id, 'name', u.username) AS user
      FROM moment m
      LEFT JOIN coderhub_users u ON m.user_id = u.id
      LIMIT ?, ?;
    `
    const [result] = await connection.execute(statement, [offset, size])
    return result
  }

  async deleteMomentById(momentId) {
    const statement = `DELETE FROM moment WHERE id = ?`
    const result = await connection.execute(statement, [momentId])
    return result
  }

  async deleteMomentByIds(userId, momentIds) {
    const statement = `DELETE FROM moment WHERE user_id = ? AND id IN (${momentIds.join(
      ","
    )})`
    const result = await connection.query(statement, [userId, momentIds])
    return result
  }

  async updateMomentById(content, momentId) {
    const statement = `UPDATE moment SET content = ? WHERE id = ?`
    const [result] = await connection.execute(statement, [content, momentId])
    return result
  }

  // 查询用户是否用权限
  async checkMoment(momentId, userId) {
    const statement = `SELECT * FROM moment WHERE id = ? AND user_id = ?`
    const [result] = await connection.execute(statement, [momentId, userId])
    return result.length === 0 ? false : true
  }
}

module.exports = new MomentService()
