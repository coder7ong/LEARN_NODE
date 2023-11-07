const express = require("express")
const multer = require("multer")

const app = express()

// 使用 multer 库解析 form-data 数据 (form-data一般是用来做文件上传的)
const upload = multer()

// 解析 URL 编码的请求体
app.use(express.urlencoded({ extended: true }))

// 解析任何类型的 form-data 表单数据
app.use(upload.any())

app.post("/login", (req, res) => {
  // form-data 表单字段和值
  const formData = req.body
  console.log(formData)
  res.send("Form submitted successfully.")
})

app.listen(7777, () => {
  console.log("Server started on http://localhost:7777")
})
