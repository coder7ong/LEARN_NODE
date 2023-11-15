const labelService = require("../service/label.service")

const verifyLabelExists = async (ctx, next) => {
  // 取出所有的标签
  const { labels } = ctx.request.body
  // 判断每一个标签在 label 表中是否存在
  const newLabels = []
  for (let labelName of labels) {
    const labelResult = await labelService.getLabelByName(labelName)
    const label = { name: labelName }
    // 验证需要添加的标签名存在不存在于 label 表中，区别在于在 label 表中存储的 id 不同
    if (!labelResult) {
      // 创建标签数据
      const result = await labelService.createLabel(labelName)
      label.id = result.insertId
    } else {
      // else 说明冬天添加的标签名存在于 lable 表中
      label.id = labelResult.id
    }
    newLabels.push(label)
  }
  ctx.labels = newLabels
  await next()
}

module.exports = {
  verifyLabelExists,
}
