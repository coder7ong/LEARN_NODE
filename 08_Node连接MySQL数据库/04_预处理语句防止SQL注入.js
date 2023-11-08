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

const username = "admin' --"
// 用户名输入的内容，包含恶意的SQL注入代码

const password = "password"
// 密码输入的内容

const statement = `SELECT * FROM users WHERE username=? AND password=?`
// 使用占位符(?)的查询语句

connection.query(statement, [username, password], (err, results) => {
  if (err) {
    console.log("查询失败：", err)
    return
  }

  if (results.length === 1) {
    console.log("登录成功！")
  } else {
    console.log("登录失败！")
  }
})

// connection.query 和 connection.execute 的区别？
// connection.query: 使用问号占位符(?)来表示参数，并将参数作为数组传递给查询。例如：
// connection.query('SELECT * FROM users WHERE id = ?', [userId], function (error, results, fields) {

//   });
// connection.execute: 使用命名占位符(:name)或问号占位符(?)来表示参数，并将参数作为对象传递给查询。例如：
// connection.execute('SELECT * FROM users WHERE id = :id', { id: userId }, function (error, results, fields) {
//   });
