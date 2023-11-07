const http = require("http")

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // 响应结果
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })
  res.write("<h1>hello world</h1>")
  res.end()
})

// 监听端口号
server.listen(7777, "localhost", () => {
  console.log("服务器启动成功")
})
