const express = require("express")

const app = express()

// 抽离解析 json 数据的方法
app.use((req, res, next) => {
  // json 数据的 content-type 为 application/json
  if (req.headers["content-type"] === "application/json") {
    req.on("data", (data) => {
      const info = JSON.parse(data.toString())
      // 将 info 传入下一层，在 req 上面添加新的属性 body 并且赋值为 info
      req.body = info
    })
    req.on("end", () => {
      next() // 进入下一层
    })
  } else {
    // 如果传入的数据格式不是 json 格式
    next()
  }
})

app.post("/login", (req, res, next) => {
  console.log(req.body) // 获取解析完的 json 数据
  res.end("Welcome back")
})

app.post("/product", (req, res, next) => {
  console.log(req.body) // 获取解析完的 json 数据
  res.end("Upload Product Success")
})

app.listen(7777, () => {
  console.log("普通中间件启动成功")
})
