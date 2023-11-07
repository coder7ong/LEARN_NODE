const http = require("http")
const url = require("url")
const qs = require("querystring")

// 创建一个web服务器
const server = http.createServer((req, res) => {
  // url.parse 方法并且将请求的 url 传入可以对其进行解析
  const { pathname, query } = url.parse(req.url)
  console.log(pathname)
  console.log(query)
  const { username, password } = qs.parse(query)
  console.log(username)
  console.log(password)
})

// 监听端口号
server.listen(7777, "localhost", () => {
  console.log("服务器启动成功")
})
