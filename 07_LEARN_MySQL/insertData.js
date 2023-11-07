const mysql = require("mysql2/promise")
const phoneJson = require("./phone.json")

async function insertPhones() {
  // 创建与MySQL数据库的连接
  const connection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "learn_mysql",
    charset: "utf8mb4",
  })

  // 准备插入数据的SQL语句模板
  const statement = `INSERT INTO product SET ?;`

  // 遍历phoneJson数组，将每个对象插入数据库
  for (let phone of phoneJson) {
    await connection.query(statement, phone) // 执行插入操作
  }

  // 关闭数据库连接
  await connection.end()
}

// 调用异步函数以执行插入操作
insertPhones()
