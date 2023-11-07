const http = require("http")

// http发送 get 请求
http.get("http://localhost:7777", (res) => {
  res.on("data", (chunk) => {
    console.log(chunk.toString())
  })

  res.on("end", () => {
    console.log("请求结束")
  })
})
