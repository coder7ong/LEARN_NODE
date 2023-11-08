const { Sequelize, Model, DataTypes } = require("sequelize")

const sequelize = new Sequelize("learn_mysql", "root", "root", {
  host: "localhost",
  dialect: "mysql",
})

// 定义 Brand 类与 brand 表进行映射 Product 中引用 Brand 放在 Product 之前
class Brand extends Model {}
Brand.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
    },
    phoneRank: {
      type: DataTypes.INTEGER,
    },
  },
  {
    // 映射到的表名
    tableName: "brand",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
)

// 定义模型 Product，继承自 Sequelize.Model 获取到 findAll create update destroy 等方法
class Product extends Model {}
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    score: {
      type: DataTypes.DOUBLE,
    },
    // 指定外键，这里将 brand 表中的 brand_id 重命名为 brandId 需要通过 field 指定关联的 brand_id
    brandId: {
      field: "brand_id",
      type: DataTypes.INTEGER,
      // 设置外键约束，在 Brand 表中的 brand_id 引用了 Brand 表中的 id
      references: {
        model: Brand,
        key: "id",
      },
    },
    // 另外一种写法，不重命名
    // brand_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: Brand,
    //     key: "id",
    //   },
    // },
  },
  {
    tableName: "product",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
)

// 将两张表联系在一起 通过 brandId 将Product表属于Brand
Product.belongsTo(Brand, {
  // 在属于关系中将 brandId 作为外键
  foreignKey: "brandId",
})

// 使用 sequelize 对数据库操作
async function queryProducts() {
  // 获取 product 产品信息并且获取对应产品在 brand 表中的品牌信息
  const result = await Product.findAll({
    include: {
      model: Brand,
    },
  })
  console.log(result)
}

queryProducts()
