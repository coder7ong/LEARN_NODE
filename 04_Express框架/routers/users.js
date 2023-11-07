/**
 * 请求所有的用户信息：        get     /users
 * 请求某一个用户的信息：      get     /users/:id
 * 注册一个用户的信息：        post    /users   body {username:password}
 * 删除某一个用户的信息：      delete  /users/:id
 * 修改某一个用户的信息：      patch   /users/:id  {nickname:}
 */

const express = require("express")

const router = express.Router()

// 查询用户信息
router.get("/", (req, res, next) => {
  res.json(["7long", "james"])
})

// 查询某一用户信息  app.use("/users", userRouter) 使用了这种方式这里就不需要写 users
router.get("/:username", (req, res, next) => {
  res.json(`${req.params.username}的用户信息`)
})

// 注册用户信息
router.post("/", (req, res, next) => {
  res.json("create user success")
})

module.exports = router
