const express = require("express")

const app = express()

// 定义中间件
const middleware1 = (req, res, next) => {
  res.body = "Hello middleware1"
  console.log("Hello middleware1")
  next()
}

const middleware2 = (req, res, next) => {
  res.body = "Hello middleware2"
  console.log("Hello middleware2")
  next()
}

const middleware3 = (req, res, next) => {
  res.body = "Hello middleware3"
  console.log("Hello middleware3")
}

// 使用中间件
app.use(middleware1, middleware2, middleware3)

app.listen(3000, () => {
  console.log("server is running at port 3000")
})
