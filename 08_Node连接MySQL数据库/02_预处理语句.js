const mysql = require("mysql2")
// 导入mysql2模块

// 创建一个数据库连接
const connection = mysql.createConnection({
  host: "localhost", // 数据库主机地址
  port: 3306, // 数据库端口，默认为3306
  database: "learn_mysql", // 要连接的数据库名
  user: "root", // 数据库用户名
  password: "root", // 数据库密码
})

// 使用预处理语句的示例
{
  const statement = `
    SELECT * FROM product WHERE price > ? AND brand = ?
  `
  // 声明SQL查询语句，其中使用了两个占位符来表示参数，下面两个参数填补 ? 的位置
  const params = [999, "华为"]
  // 定义参数值，按照占位符的顺序传递参数
  connection.execute(statement, params, (err, results) => {
    if (err) {
      console.log("查询失败:", err)
      return
    }
    console.log(results)
  })
}

// 不使用预处理语句的示例
{
  // 直接将参数值写在SQL查询语句中
  const statement = `
    SELECT * FROM product WHERE price > 999 AND brand = '华为'
  `
  connection.query(statement, (err, results) => {
    if (err) {
      console.log("查询失败:", err)
      return
    }
    console.log(results)
  })
}
