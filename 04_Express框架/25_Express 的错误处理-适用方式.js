// 引入 Express 模块
const express = require("express")

// 创建一个应用实例
const app = express()

// 定义常量用于抛出错误
const USERNAME_DOES_NOT_EXISTS = "USERNAME_DOES_NOT_EXISTS"
const USERNAME_ALREADY_EXISTS = "USERNAME_ALREADY_EXISTS"

app.post("/login", (req, res, next) => {
  // 模拟查询数据库，用户信息是否存在
  const isLogin = true
  if (isLogin) {
    res.json("user login success")
  } else {
    next(new Error(USERNAME_DOES_NOT_EXISTS))
  }
})

app.post("/register", (req, res, next) => {
  // 模拟查询数据库，用户信息是否存在
  const isExists = true
  if (!isExists) {
    res.json("user register success")
  } else {
    next(new Error(USERNAME_ALREADY_EXISTS))
  }
})

// 错误中间件，通过 next(传入错误信息) 触发 --> 上面两种皆可触发，触发之后就会传入错误中间件
app.use((err, req, res, next) => {
  let status = 400
  let message = ""
  switch (err.message) {
    case USERNAME_DOES_NOT_EXISTS:
      message = "username does not existed"
    case USERNAME_ALREADY_EXISTS:
      message = "username already existed"
    default:
      message = "Not Found"
  }
  // 状态信息
  res.status(status)
  res.json({
    errCode: status,
    errMessage: message,
  })
})

// 监听 7777 端口并启动服务器
app.listen(7777, () => {
  console.log("服务器已启动，访问地址：http://localhost:7777")
})
