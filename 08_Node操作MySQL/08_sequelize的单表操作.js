const { Sequelize, Model, DataTypes } = require("sequelize")

const sequelize = new Sequelize("learn_mysql", "root", "root", {
  host: "localhost",
  dialect: "mysql",
})

// 定义模型 Product，继承自 Sequelize.Model 获取到 findAll create update destroy 等方法
class Product extends Model {}
// 初始化模型
Product.init(
  {
    // id 字段，类型为整数，是主键，自动递增
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // title 字段，类型为字符串，不允许为空
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // price 字段，类型为浮点数，不允许为空
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    // score 字段，类型为浮点数，允许为空
    score: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    // 与数据库表名为 product 进行映射
    tableName: "product",
    // 不需要 createdAt 字段
    createdAt: false,
    // 不需要 updatedAt 字段
    updatedAt: false,
    // 使用 sequelize 实例
    sequelize,
  }
)

// 使用 sequelize 对数据库操作
async function queryProducts() {
  //1. 查询数据库中 product 表中的所有数据
  const result = await Product.findAll() // 无条件
  const result2 = await Product.findAll({
    where: {
      price: {
        // 价格大于等于  gte 5000
        [Sequelize.Op.gte]: 5000,
        // 价格大于      gt
        // [Sequelize.Op.gt]: 5000,
        // 价格小于等于  lte
        // [Sequelize.Op.lte]: 5000,
        // 价格小于      lt
        // [Sequelize.Op.lt]: 5000,
      },
    },
  })

  //2. 向 product 表中插入数据
  const result3 = await Product.create({
    title: "华为 mate 60 pro",
    price: 6999,
    score: 99,
  })

  console.log(result3)

  //3. 更新 product 表中 id 为 1 的价格为 777
  const result4 = await Product.update({
    price: 777,
    where: {
      id: 1,
    },
  })
  console.log(result4)

  //4. 删除 product 表中 id 为 2 的数据
  const result5 = await Product.destroy({
    where: {
      id: 2,
    },
  })

  console.log(result5)
}

queryProducts()
