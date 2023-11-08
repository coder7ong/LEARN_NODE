// 引入 Sequelize 库中的两个对象：Sequelize 和 DataTypes
const { Sequelize, DataTypes } = require("sequelize")

// 创建 Sequelize 实例，连接数据库
const sequelize = new Sequelize("learn_mysql", "root", "root", {
  host: "localhost",
  dialect: "mysql",
})

// 测试数据库连接是否成功
sequelize
  .authenticate()
  .then(() => {
    console.log("数据库连接成功")
  })
  .catch((err) => {
    console.error("数据库连接失败", err)
  })

// 定义 User 模型
const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

// 同步模型到数据库中，如果数据表不存在则会自动创建
sequelize
  .sync()
  .then(() => {
    console.log("数据表同步成功")
    // 使用 ORM 方式插入数据
    User.create({
      name: "Alice",
      email: "3450027475@qq.com",
      age: 23,
    })
      .then((user) => {
        console.log("成功插入数据:", user.toJSON())
        // 插入数据之后使用 ORM 方式查询 users 表中的所有数据
        User.findAll()
          .then((users) => {
            console.log(
              "查询到的所有用户数据:",
              users.map((u) => u.toJSON())
            )
          })
          .catch((err) => {
            console.error("查询数据失败", err)
          })
      })
      .catch((err) => {
        console.error("插入数据失败", err)
      })
  })
  .catch((err) => {
    console.error("数据表同步失败", err)
  })
