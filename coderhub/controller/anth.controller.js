const jwt = require("jsonwebtoken")

const { PRIVATE_KEY } = require("../app/config")

class AuthController {
  async login(ctx, next) {
    const { id, username, password } = ctx.user // middleware中赋值
    // 登录成功生成 token
    const token = jwt.sign({ id, username }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: "RS256",
    })

    ctx.body = {
      id,
      username,
      token,
    }
  }

  // 请求资源中间件
  async success(ctx, next) {
    ctx.body = {
      code: 200,
      data: ctx.user,
      message: "校验token成功，成功请求到资源~",
    }
  }
}

module.exports = new AuthController()
