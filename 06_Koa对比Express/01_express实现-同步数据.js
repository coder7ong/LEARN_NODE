const express = require("express")

const app = express()

// 定义中间件
const middleware1 = (req, res, next) => {
  req.message = "aaa"
  next()
}

const middleware2 = (req, res, next) => {
  req.message += "bbb"
  next()
}

const middleware3 = (req, res, next) => {
  req.message += "ccc"
  res.end(req.message) // 在 middleware3 中返回结果，但如何在 middleware1 中返回？
}

// 使用中间件
app.use(middleware1, middleware2, middleware3)

app.listen(3000, () => {
  console.log("server is running at port 3000")
})
