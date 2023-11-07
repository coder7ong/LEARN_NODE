const express = require("express")

const app = express()

// 编写普通的中间件
// use 注册一个中间件，可以被任意请求执行
app.use((req, res, next) => {
  console.log("注册了01个普通的中间件")
  res.end("结束普通01中间件请求")
})

app.use((req, res, next) => {
  console.log("注册了02个普通的中间件")
  res.end("结束普通02中间件请求")
})

app.listen(7777, () => {
  console.log("普通中间件启动成功")
})
