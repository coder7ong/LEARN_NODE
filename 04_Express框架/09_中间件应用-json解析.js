const express = require("express")

const app = express()

app.post("/login", (req, res, next) => {
  // 对 json 数据进行解析
  req.on("data", (data) => {
    console.log(data.toString())
  })
  req.on("end", () => {
    res.end("Welcome back")
  })
})

app.post("product", (req, res, next) => {
  // 对 json 数据进行解析
  req.on("data", (data) => {
    console.log(data.toString())
  })
  res.on("end", () => {
    res.end("请求商品信息成功")
  })
})

app.listen(7777, () => {
  console.log("普通中间件启动成功")
})
