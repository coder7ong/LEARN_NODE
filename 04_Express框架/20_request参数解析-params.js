const express = require("express")

const app = express()

/**
 * req.params 参数 -> 数据库查询信息 -> 返回给前端
 */
app.get("/user/:name", (req, res, next) => {
  console.log(req.params)
  res.end("获取用户详情信息~")
})

app.listen(7777, () => {
  console.log("Server started on http://localhost:7777")
})
