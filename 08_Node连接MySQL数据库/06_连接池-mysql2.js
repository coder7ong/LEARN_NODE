const mysql = require("mysql2")

// 创建连接池对象
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "learn_mysql",
  connectionLimit: 10, // 连接池最大连接数，即连接池中可同时存在的连接数量
})

// 使用连接池
const statement = `
  SELECT * FROM product WHERE brand = ? AND price > ?;
`

pool
  .promise()
  .execute(statement, ["华为", 900])
  .then((results) => {
    pool.end() // 释放连接池中所有连接资源
    console.log(results)
  })
  .catch((err) => {
    pool.end() // 释放连接池中所有连接资源
    console.log(err)
  })
