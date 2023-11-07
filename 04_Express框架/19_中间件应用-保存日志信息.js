const express = require("express")
const morgan = require("morgan")
const fs = require("fs")

const app = express()

// 使用morgan中间件记录HTTP请求日志
const writeStream = fs.createWriteStream("./logs/access.log", {
  flags: "a+", // 追加
})
app.use(morgan("combined", { stream: writeStream }))

// 添加路由处理程序
app.post("/login", (req, res) => {
  res.end("Hello World!")
})

app.listen(7777, () => {
  console.log("Server started on http://localhost:7777")
})
