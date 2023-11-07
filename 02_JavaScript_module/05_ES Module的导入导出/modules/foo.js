// 导出方式一：单独导出
export const name = "7ong"
export const age = 18
export const sayHello = function (name, age) {
  console.log("Hello, my name is " + name + " and I am " + age + " years old.")
}

// 导出方式二：统一导出
const userName = "james"
const age = 23
const syaHello = function (name, age) {
  console.log("Hello, my name is " + name + " and I am " + age + " years old.")
}

// 注意这里是大括号而不是对象
export { age, syaHello, userName }

// 导出方式三：可以起别名

const Name = "7ONG"
const Age = 18
const SayHello = function (name, age) {
  console.log("Hello, my name is " + name + " and I am " + age + " years old.")
}
export { Age as FAge, Name as FName, SayHello as FSayHello }
