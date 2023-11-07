const express = require("express")

// express 其实是一个函数：createApplication
// 返回 app
const app = express()

// 监听默认路径的 get 和 post 请求
app.get("/", (req, res, next) => {
  res.end("Hello Get Express")
})

app.post("/", (req, res, next) => {
  res.end("Hello Post Express")
})

app.post("/login", (req, res, next) => {
  res.end("Welcome back")
})

// 开启监听
app.listen(7777, () => {
  console.log("express 初体验服务器启动成功")
})
