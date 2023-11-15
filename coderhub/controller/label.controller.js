const labelService = require("../service/label.service")

class LabelController {
  async create(ctx, next) {
    const { name } = ctx.request.body
    const result = await labelService.createLabel(name)
    ctx.body = result
  }

  // 查看标签列表
  async list(ctx, next) {
    const { limit, offset } = ctx.query
    const result = await labelService.getLabelList(limit, offset)
    ctx.body = result
  }

  // 查看动态下的标签列表
  async momentLabelList(ctx, next) {
    const { momentId } = ctx.query
    const result = await labelService.getLabelListByMomentId(momentId)
    ctx.body = result
  }
}

module.exports = new LabelController()
