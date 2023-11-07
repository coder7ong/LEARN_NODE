const express = require("express")

const app = express()

/**
 * req.query 参数 -> 数据库查询信息 -> 返回给前端
 */
app.get("/login", (req, res, next) => {
  console.log(req.query)
  console.log(req.query.username)
  console.log(req.query.password)
  res.end("用户登录成功")
})

app.listen(7777, () => {
  console.log("Server started on http://localhost:7777")
})
