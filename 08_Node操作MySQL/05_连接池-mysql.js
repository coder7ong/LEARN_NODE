const mysql = require("mysql")

// 创建连接池对象
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "learn_mysql",
  connectionLimit: 10, // 连接池最大连接数，即连接池中可同时存在的连接数量
})

// 从连接池中获取一个连接并执行查询
pool.getConnection((err, connection) => {
  if (err) {
    console.log("获取连接失败：", err)
    return
  }
  const sql = "SELECT * FROM users"
  // 执行查询操作
  connection.query(sql, (err, results) => {
    // 释放连接回连接池
    connection.release()
    if (err) {
      console.log("查询失败：", err)
      return
    }
    console.log("查询结果：", results)
  })
})
