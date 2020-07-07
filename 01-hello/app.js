const Koa = require('koa')
const json = require('koa-json')

const app = new Koa()

// make JSON Prettier middleware
app.use(json())

// Simple middleware example
app.use(async ctx => {
    ctx.body = {msg: 'Hello World'}
})

app.listen(3000)
console.log("server run at http://localhost:3000")
