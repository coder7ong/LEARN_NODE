const mysql = require("mysql2")

// 导入 .env 配置
const config = require("./config")

// 创建连接池
const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  connectionLimit: 10,
})

// 测试连接
connections.getConnection((err, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log("数据库连接失败")
    } else {
      console.log("数据库连接成功")
    }
  })
})

// 后续通过 promise 操作，这里将 connections 作为 promise 导出
module.exports = connections.promise()
