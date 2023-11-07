const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const userRouter = require("../router/user.router")
// 引入错误处理函数
const errorHandler = require("./error-handle")
const app = new Koa()

app.use(bodyParser())
// 用户注册接口
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// 监听错误事件
app.on("error", errorHandler)
module.exports = app
