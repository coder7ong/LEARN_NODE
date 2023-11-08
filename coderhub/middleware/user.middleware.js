// 获取错误常量
const errorTypes = require("../constants/error-types")
// 导入根据用户名获取到的数据集
const service = require("../service/user.service")
// 导入密码加密函数 md5password
const md5password = require("../utils/encrypt-password")

// 校验账号密码中间件
const verifyUser = async (ctx, next) => {
  //1. 判断用户名和密码不能为空
  const { username, password } = ctx.request.body
  if (!username || !password || username === "" || password === "") {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
    // 发出错误事件
    return ctx.app.emit("error", error, ctx)
  }

  //2. 判断用户名是否已被注册
  const result = await service.getUserByName(username)
  // 用户名查询到的结果是数组
  if (result.length) {
    const error = new Error(errorTypes.USERNAME_ALREADY_EXIST)
    return ctx.app.emit("error", error, ctx)
  }

  // next执行下个中间件，await等待下个中间件异步操作执行完成才返回最终结果
  await next()
}

// 密码加密中间件
const encryptPassword = async (ctx, next) => {
  // 获取密码
  const { password } = ctx.request.body
  // 密码加密
  ctx.request.body.password = md5password(password)
  await next()
}

module.exports = { verifyUser, encryptPassword }
