// 根据错误常量对不同的错误进行处理
const errorTypes = require("../constants/error-types")

const errorHandler = (error, ctx) => {
  let status, message
  switch (error.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400 // Bad Request
      message = "用户名或密码不能为空~"
      break
    case errorTypes.USERNAME_ALREADY_EXIST:
      status = 409 // conflict 冲突错误
      message = "用户名已存在不可重复注册~"
      break
    case errorTypes.USER_DOSE_NOT_EXISTS:
      status = 400
      message = "用户不存在，请先注册~"
      break
    case errorTypes.PASSWORD_IS_INCORRENT:
      status = 400
      message = "密码错误~"
      break
    case errorTypes.UNAUTHORIZATION:
      status = 401
      message = "无效token~"
      break
    case errorTypes.UNPERMISSION:
      status = 403
      message = "没有权限~"
      break
    default:
      status = 404
      message = "Not Found"
  }
  ctx.status = status
  ctx.body = message
}

module.exports = errorHandler
