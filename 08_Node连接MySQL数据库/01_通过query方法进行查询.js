// 导入mysql2模块
const mysql = require("mysql2")

// 创建一个数据库连接
const connection = mysql.createConnection({
  host: "localhost", // 数据库主机地址
  port: 3306, // 数据库端口，默认为3306
  database: "learn_mysql", // 要连接的数据库名
  user: "root", // 数据库用户名
  password: "root", // 数据库密码
})

{
  // 编写SQL查询语句
  const statement = `
    SELECT * FROM product
  `
  /**
   * statement:SQL语句
   * 第二个参数为回调函数接收三个参数：错误信息、查询结果、查询字段信息
   */
  connection.query(statement, (err, values, fields) => {
    if (err) {
      console.log("查询失败:", err)
      return
    }
    console.log(values)
  })
}
