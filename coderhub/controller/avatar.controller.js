const avatarService = require("../service/avatar.service")
const userService = require("../service/user.service")
const { APP_HOST, APP_PORT } = require("../app/config")

class AvatarController {
  async saveAvatarInfo(ctx, next) {
    // 获取图像的相关信息
    const { mimetype, filename, size } = ctx.req.file
    const userId = ctx.user.id
    // 将图像数据保存包数据库中
    await avatarService.createAvatar(mimetype, filename, size, userId)
    // 将图片地址保存到user表中
    const avatarUrl = `${APP_HOST}:${APP_PORT}/users/${userId}/avatar`
    await userService.updateUserAvatarById(userId, avatarUrl)
    ctx.body = {
      status: 200,
      message: "头像上传成功",
    }
  }

  // 实现动态图片上传的方法
  async savePictureInfo(ctx, next) {
    const files = ctx.req.files
    const userId = ctx.user.id
    const { momentId } = ctx.query
    files.forEach((file) => {
      const { mimetype, filename, size } = file
      avatarService.createFile(filename, mimetype, size, userId, momentId)
    })
    ctx.body = {
      status: 200,
      message: "动态所有图片上传成功",
    }
  }
}

module.exports = new AvatarController()
