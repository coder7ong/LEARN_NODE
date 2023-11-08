const errorTypes = require("../constants/error-types")
const service = require("../service/auth.service")
const md5password = require("../utils/encrypt-password")

const verifyLogin = async (ctx, next) => {
  //1. 获取用户名和密码
  const { username, password } = ctx.request.body

  //2. 判断用户名和密码是否为空
  if (!username || !password) {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit("error", error, ctx)
  }

  //3. 判断用户是否存在
  const result = await service.getUserByName(username)
  //再取出来第一个用户
  const user = result[0]
  // 注册是判断用户不存在可以继续执行，登录是判断用户不存在直接报错
  if (!user) {
    const error = new Error(errorTypes.USER_DOSE_NOT_EXISTS)
    return ctx.app.emit("error", error, ctx)
  }

  //4. 判断密码是否与数据库中加密过的密码是否一致
  if (md5password(password) !== user.password) {
    const error = new Error(errorTypes.PASSWORD_IS_INCORRENT)
    return ctx.app.emit("error", error, ctx)
  }

  await next()
}

module.exports = { verifyLogin }
