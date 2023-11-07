const app = require("./app")
const config = require("./app/config")

app.listen(config.APP_PORT, () => {
  console.log(`Server is running on port ${config.APP_PORT}`)
})
