const connection = require("../app/database")

class LabelService {
  async createLabel(name) {
    const statement = `INSERT INTO label (name) VALUES (?)`
    const [result] = await connection.execute(statement, [name])
    return result
  }

  // 根据标签名获取标签数据，如果有数据，就返回true，如果没有数据就返回false
  async getLabelByName(labelName) {
    const statement = `SELECT * FROM label WHERE name = ?`
    const [result] = await connection.execute(statement, [labelName])
    return result[0]
  }

  // 查看标签列表
  async getLabelList(limit, offset) {
    const statement = `SELECT * FROM label LIMIT ?,?`
    const [result] = await connection.execute(statement, [offset, limit])
    return result
  }

  // 查看动态下的标签列表
  async getLabelListByMomentId(momentId) {
    const statement = `
      SELECT 
	    m.id,
	    m.content,
	    m.user_id,
	    m.createAt createTime, 
	    JSON_ARRAYAGG(JSON_OBJECT( 'id', l.id, 'name', l.name)) labels 
      FROM
	  moment m
	  LEFT JOIN moment_label ml ON ml.moment_id = m.id
	  LEFT JOIN label l ON l.id = ml.label_id
	  WHERE m.id = ?
      `
    const [result] = await connection.execute(statement, [momentId])
    return result
  }
}

module.exports = new LabelService()
