const http = require("http")
const url = require("url")
const qs = require("querystring")

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // 设置响应 header
  // 设置方式一
  // res.setHeader("Content-Type", "text/html;charset=utf-8")
  // 设置方式二
  res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" })
  res.end()
})

// 监听端口号
server.listen(7777, "localhost", () => {
  console.log("服务器启动成功")
})
