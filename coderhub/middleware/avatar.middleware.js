const Multer = require("koa-multer")
const Jimp = require("jimp")
const path = require("path")

const { AVATAR_PATH, PICTURE_PATH } = require("../constants/file-path")
// 使用 koa-multer 将上传图片保存在服务器
const avatarUpload = Multer({ dest: AVATAR_PATH })

const avatarHandler = avatarUpload.single("avatar")

// 使用 koa-multer 将上传图片保存在服务器
const pictureUpload = Multer({ dest: PICTURE_PATH })

// 最大上传文件数为 9
const pictureHandler = pictureUpload.array("picture", 9)

// 实现图片重置大小中间件 分为四种 small middle large 和 原图 类型
const pictureResize = async (ctx, next) => {
  const files = ctx.req.files

  for (let file of files) {
    const destPath = path.join(file.destination, file.filename)
    // Jimp 返回的是 Promise 这里不使用 await 是因为图片一般比较大，如果使用 await 等待就会很慢
    Jimp.read(file.path).then(
      (image) => {
        // Jimp.AUTO 会根据宽度自适应高度 file.destination即当前文件夹拼接上文件名再拼接上不同的尺寸
        image.resize(1280, Jimp.AUTO).write(`${destPath}-large`)
        image.resize(640, Jimp.AUTO).write(`${destPath}-middle`)
        image.resize(320, Jimp.AUTO).write(`${destPath}-small`)
      },
      (err) => {
        console.log(err)
      }
    )
  }

  await next()
}

module.exports = { avatarHandler, pictureHandler, pictureResize }
