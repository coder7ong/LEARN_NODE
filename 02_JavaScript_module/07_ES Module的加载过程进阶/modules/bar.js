let name = "7ONG"
let sayHello = function () {
  console.log("hello")
}
// 简单数据类型
setTimeout(() => {
  name = "james"
}, 1000)

// 复杂数据类型
setTimeout(() => {
  sayHello = () => {
    console.log("hello updated")
  }
}, 1000)

export { name, sayHello }
