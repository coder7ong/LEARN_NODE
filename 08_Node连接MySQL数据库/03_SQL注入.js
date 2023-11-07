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

// 用户名输入的内容带有恶意注入代码的用户名 admin' --
// -- 是SQL中的注释符，它使得应用程序认为后面的所有查询条件都是注释掉的，从而绕过了密码验证，直接返回了登录成功状态。
const username = "admin' --"

const password = "password"
// 密码输入的内容

const statement = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`
// 查询语句，其中使用了用户输入的内容拼接成的SQL查询语句

connection.query(statement, (err, results) => {
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
