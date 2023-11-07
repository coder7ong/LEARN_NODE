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
        console.log(data)
        console.log(typeof data)
        // 使用 JSON.parse 将 json 对象从字符串格式转成对象格式
        const { username, password } = JSON.parse(data)
        console.log(typeof data)
        console.log(username)
        console.log(password)
      })
    }
  }
})

// 监听端口号
server.listen(7777, "localhost", () => {
  console.log("服务器启动成功")
})
