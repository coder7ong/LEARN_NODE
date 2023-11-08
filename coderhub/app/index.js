const Koa = require("koa")
const bodyParser = require("koa-bodyparser")

// 动态注册所有路由
const useRoutes = require("../router/index")

// 引入错误处理函数
const errorHandler = require("./error-handle")

const app = new Koa()

app.use(bodyParser())
// 传入 app 注册所有路由
useRoutes(app)

// 监听错误事件
app.on("error", errorHandler)
module.exports = app
