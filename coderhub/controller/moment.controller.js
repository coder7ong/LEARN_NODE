const fs = require("fs")

const momentService = require("../service/moment.service")
const avatarService = require("../service/avatar.service")

const { PICTURE_PATH } = require("../constants/file-path")

class MomentController {
  // 新增动态
  async create(ctx, next) {
    //1. 获取用户传入的数据
    const userId = ctx.user.id
    const content = ctx.request.body.content

    // 2. 将数据插入到数据库中
    const result = await momentService.create(userId, content)
    ctx.body = result
  }

  // 获取某一条动态详情
  async detail(ctx, next) {
    //1. 获取传入的动态 id
    const momentId = ctx.params.momentId
    const result = await momentService.getMomentById(momentId)
    ctx.body = result
  }

  // 查询多条动态详情
  async list(ctx, next) {
    //1. 获取传入的动态 id
    const { offset, size } = ctx.query
    const result = await momentService.getMomentList(offset, size)
    ctx.body = result
  }

  // 删除某一条动态
  async deleteMoment(ctx, next) {
    const momentId = ctx.params.momentId
    const result = await momentService.deleteMomentById(momentId)
    ctx.body = result
  }

  // 删除多条动态信息
  async deleteMoments(ctx, next) {
    const momentIds = ctx.request.body.momentIds
    const userId = ctx.user.id
    const result = await momentService.deleteMomentByIds(userId, momentIds)
    ctx.body = result
  }

  // 修改动态
  async updateMoment(ctx, next) {
    const momentId = ctx.request.body.momentId
    const content = ctx.request.body.content
    const result = await momentService.updateMomentById(content, momentId)
    ctx.body = result
  }

  // 给动态添加标签
  async addLabels(ctx, next) {
    // 获取经过验证标签是否存在中间件处理过的 labels
    const { labels } = ctx
    const { momentId } = ctx.params

    // 添加所有标签
    labels.forEach(async (label) => {
      // 判断动态中是否已经存在该标签
      const isExist = await momentService.hasLabel(label, momentId)
      if (!isExist) {
        // 不存在才需要在moment_label关系表中添加标签和动态的关系
        momentService.addLabel(momentId, label.id)
      }
    })
    ctx.body = {
      code: 200,
      message: "为动态添加标签成功~",
    }
  }

  // 动态图片的信息
  async fileInfo(ctx, next) {
    // 注意修改为 let 下面需要根据客户端传入的尺寸修改 filename的值
    let { filename } = ctx.params
    // 不能使用动态 ID 查询因为动态ID有多个图片需要根据 filename 查询
    const fileInfo = await avatarService.getFileInfoByFilename(filename)
    const { type } = ctx.query

    // 获取客户端传入的 type
    const types = ["small", "middle", "large"]
    // some 判断数组中是否包含其中之一，包含返回 true
    if (types.some((item) => item === type)) {
      filename = filename + "-" + type
    }

    ctx.response.set("Content-Type", fileInfo.mimetype)
    ctx.body = fs.createReadStream(`${PICTURE_PATH}/${filename}`)
  }
}

module.exports = new MomentController()
