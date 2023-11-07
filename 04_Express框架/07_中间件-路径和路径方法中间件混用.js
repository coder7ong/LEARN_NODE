const express = require("express")

const app = express()

// 路径中间件
app.use((req, res, next) => {
  console.log("common middleware01")
  next()
})

app.get("/home", (req, res, next) => {
  console.log("home path and method middleware01")
})

app.post("/home", (req, res, next) => {
  console.log("home path and method middleware02")
})

app.listen(7777, () => {
  console.log("普通中间件启动成功")
})
