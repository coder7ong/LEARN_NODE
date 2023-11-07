const http = require("http")
const url = require("url")
const qs = require("querystring")

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // 设置状态码
  // 方式一：直接给属性赋值
  res.statusCode = 200
  // 方式二：和 Head 一起设置
  //   res.writeHead(500, { "Content-Type": "text/plain" })
  res.end()
})

// 监听端口号
server.listen(7777, "localhost", () => {
  console.log("服务器启动成功")
})
