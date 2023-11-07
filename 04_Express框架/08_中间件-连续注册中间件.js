const express = require("express")

const app = express()

app.use((req, res, next) => {
  console.log("common middleware01")
  next()
})

app.get(
  "/home",
  (req, res, next) => {
    console.log("home path and method middleware 01")
    next()
  },
  (req, res, next) => {
    // 需要在这个操作之前添加操作的时候，可以在前面添加一个中间件
    console.log("home path and method middleware 02")
    res.end("连续注册中间件结束")
  }
),
  app.listen(7777, () => {
    console.log("express服务器启动")
  })
