const express = require("express")
const multer = require("multer")

const app = express()

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads/")
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname)
  },
})

const upload = multer({
  storage,
})

// 修改为局部中间件使用，不影响 upload 中的文件上传
app.post("/login", upload.any(), (req, res) => {
  const formData = req.body
  console.log(formData)
  res.send("Form submitted successfully.")
})

app.post("/upload", upload.array("image1", 2), (req, res, next) => {
  console.log(req.files[0])
  console.log(req.files[1])
  res.end("文件上传成功")
})

app.listen(7777, () => {
  console.log("Server started on http://localhost:7777")
})
