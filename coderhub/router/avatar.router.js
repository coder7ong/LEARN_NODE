const Router = require("koa-router")

const {
  verifyToken,
  verifyPermission,
} = require("../middleware/auth.middleware")
const {
  avatarHandler,
  pictureHandler,
  pictureResize,
} = require("../middleware/avatar.middleware")

const {
  saveAvatarInfo,
  savePictureInfo,
} = require("../controller/avatar.controller")

const avatarRouter = new Router({ prefix: "/upload" })

// 上传头像接口
avatarRouter.post("/avatar", verifyToken, avatarHandler, saveAvatarInfo)
// 上传动态配图接口
avatarRouter.post(
  "/picture",
  verifyToken,
  pictureHandler,
  pictureResize,
  verifyPermission,
  savePictureInfo
)

module.exports = avatarRouter
