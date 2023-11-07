class UserService {
  async createUser(payload) {
    // 获取用户请求传递的参数
    // 查询数据库
    // 返回数据
    return (
      "用户注册分层结构代码完成" +
      "\n" +
      "username：" +
      payload.username +
      "\n" +
      "password：" +
      payload.password
    )
  }
}

module.exports = new UserService()
