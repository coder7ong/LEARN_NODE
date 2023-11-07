const http = require("http")
const url = require("url")
const qs = require("querystring")

// 创建一个web服务器
const server = http.createServer((req, res) => {
  console.log(req.headers)
})

// 监听端口号
server.listen(7777, "localhost", () => {
  console.log("服务器启动成功")
})
