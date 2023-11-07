// 引入 Express 模块
const express = require("express")

// 创建一个应用实例
const app = express()

// 处理 GET 请求 /login 路径的请求
app.get("/login", (req, res, next) => {
  // 设置响应头类型为 JSON
  res.type("application/json")
  // 向请求方返回包含用户名和密码的 JSON 字符串
  res.end(
    JSON.stringify({
      username: req.query.username,
      password: req.query.password,
    })
  )
})

// 监听 7777 端口并启动服务器
app.listen(7777, () => {
  console.log("服务器已启动，访问地址：http://localhost:7777")
})
