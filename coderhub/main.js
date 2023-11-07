const app = require("./app")
// 导入连接池
const connections = require("./app/database")
const config = require("./app/config")

app.listen(config.APP_PORT, () => {
  console.log(`Server is running on port ${config.APP_PORT}`)
})
