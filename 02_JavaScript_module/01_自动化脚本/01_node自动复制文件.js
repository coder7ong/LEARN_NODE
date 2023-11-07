const fs = require("fs")

// 目标文件夹
const destDir = "./copyed"
// 待复制文件夹
const srcDir = "./waitCopy"

let i = 0

while (i < 5) {
  i++
  const num = "day" + (i + "").padStart(2, "0")
  const srcPath = `${srcDir}/${num}`
  const destPath = `${destDir}/${num}`
  if (fs.existsSync(destPath)) continue
  fs.mkdir(destPath, (err) => {
    if (!err) console.log("文件创建成功")

    // 遍历目录下所有的文件
    const srcFiles = fs.readdirSync(srcPath)
    srcFiles.forEach((file) => {
      if (file.endsWith(".js")) {
        fs.copyFile(srcPath + "/" + file, destPath + "/" + file, (err) => {
          if (!err) console.log("文件复制成功")
        })
      }
    })
  })
}
