const express = require("express")
const multer = require("multer")

const app = express()

/**
 * multer.diskStorage() 创建一个存储配置，指定了文件上传后的目录和文件名
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

// multer({ storage: storage }) 创建一个 multer 实例
const upload = multer({
  storage,
})

// upload.single('file') 中间件来处理单个文件的上传
app.post("/upload", upload.single("file"), (req, res, next) => {
  console.log(req.file)
  res.end("文件上传成功")
})

app.listen(7777, () => {
  console.log("Server started on http://localhost:7777")
})
