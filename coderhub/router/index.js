const fs = require("fs")

const useRoutes = (app) => {
  fs.readdirSync(__dirname).forEach((file) => {
    // 如果文件是 index.js 则不需要进行路由注册
    if (file === "index.js") return
    // 路由文件需要注册
    const router = require(`./${file}`)
    app.use(router.routes())
    app.use(router.allowedMethods())
  })
}

module.exports = useRoutes
