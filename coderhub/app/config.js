const dotenv = require("dotenv")
const fs = require("fs")
const path = require("path")

dotenv.config()

// 引入私钥和公钥
const PRIVATE_KEY = fs.readFileSync(
  path.resolve(__dirname, "./keys/private.key")
)
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, "./keys/public.key"))

module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env

// 为 module.exports 对象增加两个属性
module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY
