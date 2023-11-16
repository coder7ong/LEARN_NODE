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
    JSON_OBJECT('id', u.id, 'name', u.username,'avatarUrl',u.avatar_url) AS user,
	IF(COUNT(c.id),JSON_ARRAYAGG(
			JSON_OBJECT('id',c.id,'content',c.content,'commentId',c.comment_id,'createTime',c.createAt,
									'user',JSON_OBJECT('id',cu.id,'name',cu.username,'avatarUrl',cu.avatar_url))
	),NULL) as comments,
    IF(COUNT(l.id),JSON_ARRAYAGG(
      JSON_OBJECT('id',l.id, 'name',l.name)
    ),NULL) AS labels,
    (SELECT JSON_ARRAYAGG(CONCAT('http://localhost:8000/moment/images/',file.filename)) FROM file WHERE m.id = file.moment_id) images
    FROM moment m
    LEFT JOIN coderhub_users u ON m.user_id = u.id
    LEFT JOIN comment c ON c.moment_id = m.id
    LEFT JOIN coderhub_users cu ON c.user_id = cu.id
    LEFT JOIN moment_label ml ON m.id = ml.moment_id
    LEFT JOIN label l ON ml.label_id = l.id
    WHERE m.id = ?
    GROUP BY m.id;
    `
    const [result] = await connection.execute(statement, [id])
    return result[0]
  }

  async getMomentList(offset, size) {
    const statement = `
        SELECT
          m.id AS id, m.content AS content, m.createAt AS createTime, m.updateAt AS updateTime,
          JSON_OBJECT('id', u.id, 'name', u.username) AS user,
          (SELECT COUNT(*) FROM comment c WHERE c.moment_id = m.id) commentCount,
          (SELECT COUNT(*) FROM moment_label ml WHERE ml.moment_id = m.id) labelCount,
          (SELECT JSON_ARRAYAGG(CONCAT('http://localhost:8080/moment/images/',file.filename)) FROM file WHERE m.id = file.moment_id) images
        FROM moment m
        LEFT JOIN coderhub_users u ON m.user_id = u.id
        LIMIT ?, ?;`
    const [result] = await connection.execute(statement, [offset, size])
    return result
  }

  async deleteMomentById(momentId) {
    const statement = `DELETE FROM mome nt WHERE id = ?`
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

  // 判断标签和动态的关系是否已经在 moment_label 建立联系
  async hasLabel(momentId, labelId) {
    const statement = `SELECT * FROM moment_label WHERE moment_id = ? AND label_id = ?`
    const [result] = await connection.execute(statement, [momentId, labelId])
    return result.length === 0 ? false : true
  }

  // 给动态添加标签，在 moment_label 关系表中建立联系
  async addLabel(momentId, labelId) {
    const statement = `INSERT INTO moment_label (moment_id, label_id) VALUES (?, ?)`
    const [result] = await connection.execute(statement, [momentId, labelId])
    return result
  }
}

module.exports = new MomentService()
