const http = require("http")
const url = require("url")
const qs = require("querystring")

// 创建一个web服务器
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url)
  if (pathname === "/login") {
    if (req.method === "POST") {
      // 获取post请求的数据
      req.setEncoding("utf8")
      req.on("data", (data) => {
        // 打印 json 参数
        console.log(data)
      })
    }
  }
})

// 监听端口号
server.listen(7777, "localhost", () => {
  console.log("服务器启动成功")
})
