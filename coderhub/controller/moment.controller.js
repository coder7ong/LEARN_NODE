const momentService = require("../service/moment.service")

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
}

module.exports = new MomentController()
