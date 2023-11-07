const Router = require("koa-router")

// 创建一个带有前缀 "/users" 的新路由实例
const router = new Router({ prefix: "/users" })

// 处理 GET 请求，对应路由为 "/users/"
router.get("/", (ctx, next) => {
  ctx.response.body = "User Lists~" // 设置响应体内容为 "User Lists~"
})

// 处理 PUT 请求，对应路由为 "/users/"
router.put("/", (ctx, next) => {
  ctx.response.body = "put request~" // 设置响应体内容为 "put request~"
})

module.exports = router // 导出路由实例
