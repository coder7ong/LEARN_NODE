// 第一次加载 bar.js 模块
const bar = require("./bar")
// 加载 foo.js 模块，foo.js里面又加载了一次 bar.js 测试一个模块被加载两次，里面的代码会被执行几次
require("./foo")

console.log("main.js 中代码被执行")

console.log(module)
