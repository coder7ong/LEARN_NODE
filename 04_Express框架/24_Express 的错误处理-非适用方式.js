// 引入 Express 模块
const express = require("express")

// 创建一个应用实例
const app = express()

app.post("/login", (req, res, next) => {
  // 模拟查询数据库，用户信息是否存在
  const isLogin = true
  if (isLogin) {
    res.json("user login success")
  } else {
    res.type(400)
    res.json("username does not existed")
  }
})

app.post("/register", (req, res, next) => {
  // 模拟查询数据库，用户信息是否存在
  const isExists = true
  if (!isExists) {
    res.json("user register success")
  } else {
    res.type(400)
    res.json("username already existed")
  }
})

// 监听 7777 端口并启动服务器
app.listen(7777, () => {
  console.log("服务器已启动，访问地址：http://localhost:7777")
})
