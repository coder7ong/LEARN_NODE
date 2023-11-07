const Koa = require("koa")
const Router = require("koa-router")
const multer = require("@koa/multer")

const app = new Koa()
const router = new Router()

// 配置 multer 中间件，指定上传文件保存的目录和文件名的生成方式
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/")
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  },
})

const upload = multer({ storage })

// 添加路由，使用 upload 中间件处理上传的文件
router.post("/upload", upload.single("file"), async (ctx, next) => {
  // 获取上传文件的元信息
  const { originalname, mimetype, size } = ctx.request.file

  ctx.body = {
    message: "文件上传成功",
    data: {
      fileName: originalname,
      fileType: mimetype,
      fileSize: size,
    },
  }
})

app.use(router.routes())
app.listen(3000, () => {
  console.log("server is running at http://localhost:3000")
})
