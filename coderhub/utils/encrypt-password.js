const crypto = require("crypto")

// 使用加密方式对password进行加密
const md5password = (password) => {
  const result = crypto
    .createHash("md5")
    .update(password + "_salt")
    .digest("hex")
  return result
}

module.exports = md5password
