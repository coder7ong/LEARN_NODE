const service = require("../service/user.service")

class UserController {
  async createUser(ctx, next) {
    const result = await service.createUser(ctx.request.body)
    ctx.body = result
  }
}

// 将 UserController 进行实例化操作，并且将实例化对象进行导出
module.exports = new UserController()
