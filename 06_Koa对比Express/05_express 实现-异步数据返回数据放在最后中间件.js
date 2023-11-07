const express = require("express")
const axios = require("axios")

const app = express()

// 定义中间件
const middleware1 = async (req, res, next) => {
  req.message = "aaa"
  next()
}

const middleware2 = (req, res, next) => {
  req.message += "bbb"
  next()
}

const middleware3 = (req, res, next) => {
  // 使用异步数据
  axios.get("http://123.207.32.32:9001/lyric:id=167876").then((result) => {
    req.message += result.data
  })
  // 第一种方式在这里返回结果
  res.end(req.message)
}

// 使用中间件
app.use(middleware1, middleware2, middleware3)

app.listen(3000, () => {
  console.log("server is running at port 3000")
})
