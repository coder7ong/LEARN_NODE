const express = require("express")
const multer = require("multer")

const app = express()

/**
 * multer.diskStorage() 设置文件存储信息
 * destination:上传文件的存储目录
 * filename:   文件被保存的名称
 **/
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

app.use(upload.any())

app.post("/login", (req, res) => {
  // form-data 表单字段和值
  const formData = req.body
  console.log(formData)
  res.send("Form submitted successfully.")
})

/**
 * upload.array('image1', 2) 文件名，最大文件数
 */
app.post("/upload", upload.array("image1", 2), (req, res, next) => {
  console.log(req.files[0])
  console.log(req.files[1])
  res.end("文件上传成功")
})

app.listen(7777, () => {
  console.log("Server started on http://localhost:7777")
})
