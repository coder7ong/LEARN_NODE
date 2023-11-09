const path = require("path")
const fs = require("fs")

console.log(process.cwd()) // 执行时的相对路径不是当前文件所在的路径，而是process.cwd()路径

// 方法一：修改Node进程的工作目录
// const PUBLIC_KEY = fs.readFileSync("../keys/public.key")
// console.log(PUBLIC_KEY)

// 方法二：使用 __dirname 和 path.resolve() 来获取绝对路径
console.log(path.resolve(__dirname))
const PUBLIC_KEY_PATH = fs.readFileSync(
  path.resolve(__dirname, "../keys/public.key")
)

console.log(PUBLIC_KEY_PATH)
