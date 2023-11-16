const connection = require("../app/database")

// 使用类可以实现注册多个方法，将通过类 new 出来的对象作为结果导出，调用对象中的方法
class UserService {
  //1. 注册用户
  async createUser(payload) {
    // 获取用户请求传递的参数
    const { username, password } = payload
    // 插入数据库
    const statement = `INSERT INTO coderhub_users (username, password) VALUES (?, ?)`
    const result = await connection.execute(statement, [username, password])
    // 返回数据
    return result
  }

  //2. 通过 userName 查询数据表判断用户名是否已被注册
  async getUserByName(username) {
    // 根据 userName 查询数据库
    const statement = `SELECT * FROM coderhub_users WHERE username = ?`
    const result = await connection.execute(statement, [username])
    // 数组中第一个才是查询到的数组
    return result[0]
  }

  // 根据用户Id更新用户头像信息
  async updateUserAvatarById(userId, avatarUrl) {
    const statement = `UPDATE coderhub_users SET avatar_url = ? WHERE id = ?`
    const [result] = await connection.execute(statement, [avatarUrl, userId])
    return result
  }
}

module.exports = new UserService()
