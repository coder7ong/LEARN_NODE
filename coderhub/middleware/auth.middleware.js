const errorTypes = require("../constants/error-types")

const userService = require("../service/user.service")
const momentService = require("../service/moment.service")

const md5password = require("../utils/encrypt-password")
const jwt = require("jsonwebtoken")
const { PUBLIC_KEY } = require("../app/config")

// 验证登录用户名密码格式是否正确中间件
const verifyLogin = async (ctx, next) => {
  //1. 获取用户名和密码
  const { username, password } = ctx.request.body

  //2. 判断用户名和密码是否为空
  if (!username || !password) {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit("error", error, ctx)
  }

  //3. 判断用户是否存在
  const result = await userService.getUserByName(username)
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

  if (!authorization) {
    // 抛出错误需要携带 token
    const error = new Error(errorTypes.UNAUTHORIZATION)
    return ctx.app.emit("error", error, ctx)
  }

  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"], //6. 指定算法，指定算法为数组格式即可以指定多种解密算法
    })
    ctx.user = result
    await next()
  } catch (err) {
    console.log(err)
    const error = new Error(errorTypes.UNAUTHORIZATION)
    return ctx.app.emit("error", error, ctx)
  }
}

// 校验更新删除是否有权限中间件
const verifyPermission = async (ctx, next) => {
  // 获取参数
  const userId = ctx.user.id
  const momentId =
    ctx.request.body.momentId || ctx.params.momentId || ctx.query.momentId

  //查询是否有权限
  try {
    const isPermission = await momentService.checkMoment(momentId, userId)
    if (!isPermission) {
      const error = new Error(errorTypes.UNPERMISSION)
      return ctx.app.emit("error", error, ctx)
    }
  } catch (error) {
    console.log(error)
  }
  await next()
}

module.exports = { verifyLogin, verifyToken, verifyPermission }
