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
}

module.exports = new MomentService()
