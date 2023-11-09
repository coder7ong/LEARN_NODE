const errorTypes = require("../constants/error-types")
const service = require("../service/auth.service")
const md5password = require("../utils/encrypt-password")
const jwt = require("jsonwebtoken")
const { PUBLIC_KEY } = require("../app/config")

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
  // 赋值到 ctx 对象上，以便登录成功之后返回 user 里面的信息
  ctx.user = user
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

// 校验 token 中间件
const verifyToken = async (ctx, next) => {
  //5. 获取 token
  const authorization = ctx.request.headers.authorization
  const token = authorization.replace("Bearer ", "")
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"], //6. 指定算法，指定算法为数组格式即可以指定多种解密算法
    })
    ctx.user = result
    await next()
  } catch (err) {
    const error = new Error(errorTypes.UNAUTHORIZATION)
    return ctx.app.emit("error", error, ctx)
  }
}

module.exports = { verifyLogin, verifyToken }
