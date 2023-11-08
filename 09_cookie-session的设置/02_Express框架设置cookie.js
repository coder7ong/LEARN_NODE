// 引入所需的模块
const express = require("express")
const cookieParser = require("cookie-parser")

// 创建 Express 应用程序
const app = express()

// 使用中间件解析 cookie
app.use(cookieParser())

// 设置路由来设置 Cookie
app.get("/set-cookie", (req, res) => {
  // 设置名为 "username" 的 Cookie，值为 "john_doe"，并设置过期时间为30天
  res.cookie("username", "john_doe", {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  })

  // 发送包含 Cookie 的响应
  res.send("Cookie has been set")
})

// 启动服务器，监听端口
app.listen(3000, () => {
  console.log("Express server is running on port 3000")
})
