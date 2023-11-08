// 设置一个名为 "username" 的Cookie，值为 "john_doe"，通过分号;分割，并设置过期时间为30天
document.cookie =
  "username=john_doe; expires=" +
  new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toUTCString() +
  "; path=/"

// 设置一个安全的Cookie，只能通过HTTPS传输
document.cookie = "secure_cookie=12345; secure"

// 设置一个HttpOnly的Cookie，禁止JavaScript访问
document.cookie = "http_only_cookie=test; HttpOnly"
