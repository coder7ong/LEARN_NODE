const express = require("express")
const multer = require("multer")

const app = express()

// 使用 multer 库解析 form-data 数据
const upload = multer({
  // 文件上传地址
  dest: "./uploads/",
})

/**
 * 文件上传接口
 * 插入中间件：获取上传的文件，并且进行保存  upload.single('file') 表示上传了一个文件 file 是上传文件的 key
 */
app.post("/upload", upload.single("file"), (req, res, next) => {
  res.end("文件上传成功")
})

app.listen(7777, () => {
  console.log("Server started on http://localhost:7777")
})
