const fs = require("fs")

const userService = require("../service/user.service")
const avatarService = require("../service/avatar.service")

const { AVATAR_PATH } = require("../constants/file-path")

class UserController {
  async createUser(ctx, next) {
    const result = await userService.createUser(ctx.request.body)
    ctx.body = result
  }

  // 获取用户头像信息
  async avatarInfo(ctx, next) {
    const { userId } = ctx.params
    const avatarInfo = await avatarService.getAvatarByUserId(userId)

    // 设置图片类型为
    ctx.response.set("Content-Type", avatarInfo.mimetype)
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${avatarInfo.filename}`)
  }
}

// 将 UserController 进行实例化操作，并且将实例化对象进行导出
module.exports = new UserController()
