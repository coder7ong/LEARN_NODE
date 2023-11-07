const express = require("express")

const app = express()

// 编写路径方法中间件
app.get("/home", (req, res, next) => {
  console.log("home middleware 02")
  res.end("Home middleware02")
})

app.listen(7777, () => {
  console.log("普通中间件启动成功")
})
