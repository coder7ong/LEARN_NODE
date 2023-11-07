const http = require("http")

// http发送 post
const req = http.request(
  {
    hostname: "localhost",
    port: 7777,
    path: "/login",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  },
  (res) => {
    res.on("data", (chunk) => {
      console.log(chunk.toString())
    })

    // 请求结束
    res.on("end", () => {
      console.log("请求结束")
    })
  }
)

// 请求 request 发送请求需要进行手动结束请求才会发出，否则会阻塞
req.end()
