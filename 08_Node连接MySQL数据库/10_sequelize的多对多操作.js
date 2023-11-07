const { Sequelize, Model, DataTypes } = require("sequelize")

const sequelize = new Sequelize("learn_mysql", "root", "root", {
  host: "localhost",
  dialect: "mysql",
})

// 创建 Student 类
class Student extends Model {}
Student.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    tableName: "students",
    // 指定 false 查询时忽略
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
)

// 创建 Course 类
class Course extends Model {}
Course.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {
      type: DataTypes.STRING,
      allowNotNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    tableName: "courses",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
)

// 创建 student_course 类
class StudentCourse extends Model {}
StudentCourse.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    student_id: {
      type: DataTypes.INTEGER,
      // 在 student_course 表中的 student_id 引用了 Student 表中的 id
      references: {
        model: Student,
        key: "id",
      },
    },
    course_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Course,
        key: "id",
      },
    },
  },
  {
    tableName: "student_course",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
)

// 多对多关系的联系
Student.belongsToMany(Course, {
  // 通过 StudentCourse 建立关系
  through: StudentCourse,
  // student 表属于 course 表这里主键为 student_id
  foreignKey: "student_id",
  otherKey: "course_id",
})

Course.belongsToMany(Student, {
  through: StudentCourse,
  foreignKey: "course_id",
  otherKey: "student_id",
})

// 查询语句
async function query() {
  const student = await Student.findAll({
    // 建立过关系，查询的时候直接指定包含 Course 即可
    include: {
      model: Course,
    },
  })
  console.log(student)
}

query()
