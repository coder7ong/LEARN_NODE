const express = require("express")

const app = express()

// 编写路径匹配中间件
app.use("/home", (req, res, next) => {
  console.log("home middleware 01")
  res.end("Home middleware")
})

app.listen(7777, () => {
  console.log("普通中间件启动成功")
})
