import { name, sayHello } from "./bar.js"

setTimeout(() => {
  console.log(name)
  console.log(sayHello)
}, 2000)
