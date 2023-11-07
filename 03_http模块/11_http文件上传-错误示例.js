const http = require("http")
const fs = require("fs")

// 创建服务器
const server = http.createServer((req, res) => {
  // 判断请求路径是否为 '/upload'
  if (req.url === "/upload") {
    // 判断请求方法是否为 'POST'
    if (req.method === "POST") {
      console.log(req)
      // 创建写入流，将文件写入到 './foo.png' 中，使用 'a+' 模式，即追加模式
      const fileWriter = fs.createWriteStream("./foo.png", { flags: "a+" })
      // 监听 'data' 事件，将数据写入文件
      req.on("data", (data) => {
        console.log(data)
        fileWriter.write(data)
      })

      // 监听 'end' 事件，返回上传成功信息
      req.on("end", () => {
        res.end("文件上传成功")
      })
    }
  }
})

// 监听 7777 端口，开启服务器
server.listen(7777, () => {
  console.log("文件上传服务器开启成功")
})
