const connections = require("../app/database")

class AuthService {
  async getUserByName(username) {
    const statement = `SELECT * FROM coderhub_users WHERE username = ?`
    const result = await connections.execute(statement, [username])
    return result[0]
  }
}

module.exports = new AuthService()
