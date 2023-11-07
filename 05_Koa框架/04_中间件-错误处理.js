const Koa = require("koa")
// 创建 Koa 实例
const app = new Koa()

/**
 * 中间件1
 * @param {Object} ctx - 上下文对象
 * @param {Function} next - 下一个中间件函数
 */
app.use(async (ctx, next) => {
  console.log("第一个中间件执行前")
  await next()
  console.log("第一个中间件执行后")
})

// 中间件2
app.use(async (ctx, next) => {
  console.log("第二个中间件执行前")
  await next()
  console.log("第二个中间件执行后")
})

// 错误处理中间件
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit("error", err, ctx)
  }
})

/**
 * 错误事件处理函数
 * @param {Error} err - 错误对象
 * @param {Object} ctx - 上下文对象
 */
app.on("error", (err, ctx) => {
  console.error("server error", err)
})

// 启动服务器，监听 3000 端口
app.listen(3000, () => {
  console.log("Server running on port 3000")
})
