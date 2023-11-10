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

  async deleteMomentById(userId, momentId) {
    const statement = `DELETE FROM moment WHERE user_id = ? AND id = ?`
    const result = await connection.query(statement, [userId, momentId])
    return result
  }

  async deleteMomentByIds(userId, momentIds) {
    const statement = `DELETE FROM moment WHERE user_id = ? AND id IN (${momentIds.join(
      ","
    )})`
    const result = await connection.query(statement, [userId, momentIds])
    return result
  }

  async updateMomentById(userId, momentId, content) {
    const statement = `UPDATE moment SET content = ? WHERE user_id = ? AND id = ?`
    const result = await connection.query(statement, [
      content,
      userId,
      momentId,
    ])
    return result
  }
}

module.exports = new MomentService()
