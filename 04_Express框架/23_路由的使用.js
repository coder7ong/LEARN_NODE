const express = require("express")
const userRouter = require("./routers/users")

const app = express()

app.use("/users", userRouter)

app.listen(7777, () => {
  console.log("服务器已启动，访问地址：http://localhost:7777")
})
