class AuthController {
  async login(ctx, next) {
    const { username, password } = ctx.request.body
    ctx.body = `登录成功，欢迎${username}回来~`
  }
}

module.exports = new AuthController()
