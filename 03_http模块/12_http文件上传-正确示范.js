const http = require("http")
const qs = require("querystring")
const fs = require("fs")

// 创建服务器
const server = http.createServer((req, res) => {
  if (req.url === "/upload") {
    if (req.method === "POST") {
      // 图片文件必须是二进制的
      req.setEncoding("binary")

      let body = ""
      const headers = req.headers
      const totalBoundary = req.headers["content-type"].split(";")[1]
      const boundary = totalBoundary.split("=")[1]

      // 监听 'data' 事件，将数据写入文件
      req.on("data", (data) => {
        // 每次 data 发生改变的时候，文件数据就被追加到 body 中，即 body 为上传文件数据
        body += data
      })

      req.on("end", () => {
        // 处理上传文件数据，删除图片描述信息
        // 1.获取 image/jpeg 位置
        const payload = qs.parse(body, "\r\n", ": ")
        const type = payload["Content-Type"]

        // 2. 开始在 image/jpeg 的位置截取，先获取 type 位置，再获取 type 的长度
        const typeIndex = body.indexOf(type)
        const typeLength = type.length
        let imageData = body.substring(typeIndex + typeLength)

        // 3. 将两个空格去掉
        // imageData = imageData.replace('\r\n\r\n', '')
        imageData = imageData.replace(/^\s\s*/, "") // 使用正则，去掉开头的空格（/s表示空格） * 代表0个或多个

        // 4. 将最后的 boundary 和其前后两个--去掉，
        imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))

        // 5. 写入文件
        fs.writeFile("./foo.png", imageData, { encoding: "binary" }, (err) => {
          res.end("文件上传成功~~")
        })
      })
    }
  }
})

// 监听 7777 端口，开启服务器
server.listen(7777, () => {
  console.log("文件上传服务器开启成功")
})
