const express = require("express")
const bodyParser = require("body-parser")

const app = express()

// 解析x-www-form-urlencoded格式的请求体
app.use(express.urlencoded({ extended: true }))

app.post("/login", (req, res, next) => {
  console.log(req.body) // 获取解析完的 json 数据
  res.end("Welcome back")
})

app.post("/product", (req, res, next) => {
  console.log(req.body) // 获取解析完的 json 数据
  res.end("Upload Product Success")
})

app.listen(7777, () => {
  console.log("Server started on port 3000")
})
