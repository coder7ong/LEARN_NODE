```
Node_Notes
├─ 01_开发脚手架工具
│  ├─ coderwhy-main
│  │  └─ package-lock.json
│  ├─ LEARN_CLI
│  │  ├─ index.js
│  │  ├─ lib
│  │  │  ├─ config
│  │  │  │  └─ repo-config.js
│  │  │  ├─ core
│  │  │  │  ├─ actions.js
│  │  │  │  ├─ create.js
│  │  │  │  └─ help.js
│  │  │  ├─ templates
│  │  │  │  ├─ vue-component.ejs
│  │  │  │  ├─ vue-router.ejs
│  │  │  │  ├─ vuex-store.ejs
│  │  │  │  └─ vuex-types.ejs
│  │  │  └─ utils
│  │  │     ├─ log.js
│  │  │     ├─ terminal.js
│  │  │     └─ utils.js
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  └─ README.md
│  └─ LEARN_CLI(coderwhy)版本
│     ├─ .DS_Store
│     ├─ .npmrc
│     ├─ demo01
│     ├─ index.js
│     ├─ lib
│     │  ├─ config
│     │  │  └─ repo_config.js
│     │  ├─ core
│     │  │  ├─ actions.js
│     │  │  ├─ create.js
│     │  │  └─ help.js
│     │  ├─ template
│     │  │  ├─ component.vue.ejs
│     │  │  ├─ component3_ts.vue.ejs
│     │  │  ├─ component3_ts_su.vue.ejs
│     │  │  ├─ vue-router.js.ejs
│     │  │  ├─ vue-router4.js.ejs
│     │  │  ├─ vue-store.js.ejs
│     │  │  └─ vue-types.js.ejs
│     │  └─ utils
│     │     ├─ file.js
│     │     ├─ log.js
│     │     └─ terminal.js
│     ├─ LICENSE
│     ├─ package-lock.json
│     ├─ package.json
│     ├─ readme.md
│     └─ test
├─ 02_JavaScript_module
│  ├─ 01_自动化脚本
│  │  └─ 01_node自动复制文件.js
│  ├─ 02_commonjs
│  │  └─ main.js
│  ├─ 03_模块的加载过程
│  │  ├─ bar.js
│  │  ├─ foo.js
│  │  └─ main.js
│  ├─ 04_Node 图结构深度优先
│  │  ├─ aaa.js
│  │  ├─ bbb.js
│  │  ├─ ccc.js
│  │  ├─ ddd.js
│  │  ├─ eee.js
│  │  └─ main.js
│  ├─ 05_ES Module的导入导出
│  │  ├─ index.html
│  │  ├─ index.js
│  │  └─ modules
│  │     └─ foo.js
│  ├─ 06_ES Module的加载过程
│  │  ├─ index.html
│  │  ├─ modules
│  │  │  ├─ bar.js
│  │  │  └─ foo.js
│  │  └─ normal.js
│  ├─ 07_ES Module的加载过程进阶
│  │  ├─ index.html
│  │  └─ modules
│  │     ├─ bar.js
│  │     └─ foo.js
│  └─ README.md
├─ 03_http模块
│  ├─ 01_request对象解析.js
│  ├─ 02_request对象-url.js
│  ├─ 03_request对象-method.js
│  ├─ 04_request对象-method2.js
│  ├─ 05_request对象-headers.js
│  ├─ 06_request对象-响应结果.js
│  ├─ 07_request对象-状态码.js
│  ├─ 08_request对象-响应header.js
│  ├─ 09_http发送网络请求-get.js
│  ├─ 10_http发送网络请求-post.js
│  ├─ 11_http文件上传-错误示例.js
│  ├─ 12_http文件上传-正确示范.js
│  └─ foo.png
├─ 04_Express框架
│  ├─ 01_express初体验.js
│  ├─ 02_中间件-普通中间件.js
│  ├─ 03_中间件-普通中间件-next().js
│  ├─ 04_中间件-路径中间件.js
│  ├─ 05_中间件-普通和路径中间件混用.js
│  ├─ 06_中间件-路径和方法匹配中间件.js
│  ├─ 07_中间件-路径和路径方法中间件混用.js
│  ├─ 08_中间件-连续注册中间件.js
│  ├─ 09_中间件应用-json解析.js
│  ├─ 10_中间件应用-抽离json解析.js
│  ├─ 11_中间件应用-json解析简写.js
│  ├─ 12_中间件应用-urlencoded解析.js
│  ├─ 13_中间件应用-解析form-data非文件类型数据.js
│  ├─ 14_中间件应用-upload.single解析form-data单文件类型数据.js
│  ├─ 15_中间件应用-自定义文件信息form-data.js
│  ├─ 16_中间件应用-upload.array解析form-data多文件类型数据.js
│  ├─ 17_中间件应用-非文件类型和文件一起解析-错误写法.js
│  ├─ 18_中间件应用-非文件类型和文件一起解析-正确写法.js
│  ├─ 19_中间件应用-保存日志信息.js
│  ├─ 20_request参数解析-params.js
│  ├─ 21_request参数解析-query.js
│  ├─ 22_response响应结果-res.json.js
│  ├─ 22_response响应结果-非res.json.js
│  ├─ 23_路由的使用.js
│  ├─ 24_Express 的错误处理-非适用方式.js
│  ├─ 25_Express 的错误处理-适用方式.js
│  ├─ express-demo
│  │  ├─ app.js
│  │  ├─ bin
│  │  │  └─ www
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  ├─ public
│  │  │  ├─ images
│  │  │  ├─ javascripts
│  │  │  └─ stylesheets
│  │  │     └─ style.css
│  │  ├─ routes
│  │  │  ├─ index.js
│  │  │  └─ users.js
│  │  └─ views
│  │     ├─ error.jade
│  │     ├─ index.jade
│  │     └─ layout.jade
│  ├─ logs
│  │  └─ access.log
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routers
│  │  └─ users.js
│  └─ uploads
│     ├─ 20220123222213_2899a.jpeg
│     ├─ 5273f12770bc89295ecab1ca8952f762
│     └─ 微信图片_20230710172907.jpg
├─ 05_Koa框架
│  ├─ 01_koa初体验.js
│  ├─ 02_中间件-注册中间件函数.js
│  ├─ 03_Koa创建服务器.js
│  ├─ 04_中间件-错误处理.js
│  ├─ 05_中间件-使用案例.js
│  ├─ 06_Koa 路由的使用.js
│  ├─ 07_Koa中间件获取参数.js
│  ├─ 08_路由中定义参数获取参数-params.js
│  ├─ 09_路由中定义参数获取参数-query.js
│  ├─ 10_解析参数-json.js
│  ├─ 11_解析参数-form-data.js
│  ├─ 12_解析参数-x-www-form-urlencoded.js
│  ├─ 13_是否为可用路由.js
│  ├─ 14_Koa 响应数据.js
│  ├─ 15_Koa 错误处理方式.js
│  ├─ 16_Koa 洋葱模型.js
│  ├─ 17_Koa 洋葱模型-res.body.js
│  ├─ 18_Koa 洋葱模型-使用错误res.end.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ router
│  │  └─ user.js
│  └─ uploads
│     └─ 1698804492698-20220123222213_2899a.jpeg
├─ 06_Koa对比Express
│  ├─ 01_express实现-同步数据.js
│  ├─ 02_express实现-res.end在next之前.js
│  ├─ 03_express实现-res.end在next之后.js
│  ├─ 04_express 实现-异步数据.js
│  ├─ 05_express 实现-异步数据返回数据放在最后中间件.js
│  ├─ 06_express 实现-异步请求中间件作为函数.js
│  ├─ 07_Koa 实现-同步数据.js
│  ├─ 08_Koa 实现-异步数据.js
│  ├─ 09_express实现-res.end.js
│  ├─ 10_express实现-使用错误 res.body.js
│  ├─ package-lock.json
│  └─ package.json
├─ 07_LEARN_MySQL
│  ├─ insertData.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ phone.json
├─ 08_Node连接MySQL数据库
│  ├─ 01_通过query方法进行查询.js
│  ├─ 02_预处理语句.js
│  ├─ 03_SQL注入.js
│  ├─ 04_预处理语句防止SQL注入.js
│  ├─ 05_连接池-mysql.js
│  ├─ 06_连接池-mysql2.js
│  ├─ 07_ORM-定义用户模型.js
│  ├─ 08_sequelize的单表操作.js
│  ├─ 09_sequelize的一对多操作.js
│  ├─ 10_sequelize的多对多操作.js
│  ├─ package-lock.json
│  └─ package.json
├─ 09_cookie-session的设置
│  ├─ 01_客户端设置cookie.js
│  ├─ 02_Express框架设置cookie.js
│  ├─ 03_Koa服务器设置cookie.js
│  ├─ 04_Koa服务器设置cookie并且通过其他接口访问设置的cookie.js
│  └─ 05_Koa服务器设置session.js
├─ coderhub
│  ├─ .env
│  ├─ app
│  │  ├─ config.js
│  │  ├─ database.js
│  │  ├─ error-handle.js
│  │  └─ index.js
│  ├─ constants
│  │  └─ error-types.js
│  ├─ controller
│  │  ├─ anth.controller.js
│  │  └─ user.controller.js
│  ├─ main.js
│  ├─ middleware
│  │  ├─ auth.middleware.js
│  │  └─ user.middleware.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ router
│  │  ├─ auth.router.js
│  │  ├─ index.js
│  │  └─ user.router.js
│  ├─ service
│  │  ├─ auth.service.js
│  │  └─ user.service.js
│  └─ utils
│     └─ encrypt-password.js
└─ README.md

```
