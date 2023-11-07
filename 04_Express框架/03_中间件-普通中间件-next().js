const express = require("express")

const app = express()

app.use((req, res, next) => {
  console.log("注册了01个普通的中间件")
  // end 是普通响应周期的结束，依旧可以执行 next()
  res.end("结束普通中间件请求")
  // 调用 next() 传递到下一个中间件
  next()
})

app.use((req, res, next) => {
  console.log("注册了02个普通的中间件")
})

app.listen(7777, () => {
  console.log("普通中间件启动成功")
})
