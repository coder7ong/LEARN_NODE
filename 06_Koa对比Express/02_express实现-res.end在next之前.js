const express = require("express")

const app = express()

// 定义中间件
const middleware1 = (req, res, next) => {
  req.message = "aaa"

  // 将 res.end 放在 next 之前，后续代码依旧会执行，但返回给客户端的数据只是 aaa
  res.end(req.message)
  console.log(req.message)
  next()
}

const middleware2 = (req, res, next) => {
  req.message += "bbb"
  console.log(req.message)
  next()
}

const middleware3 = (req, res, next) => {
  req.message += "ccc"
  console.log(req.message)
}

// 使用中间件
app.use(middleware1, middleware2, middleware3)

app.listen(3000, () => {
  console.log("server is running at port 3000")
})
