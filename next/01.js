const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
    console.log('1')
    next()
    console.log('11')
})
app.use(async (ctx, next) => {
    console.log('2')
    next()
    console.log('22')
})
app.use((ctx, next) => {
    console.log('3')
    next()
    console.log('33')
})
app.listen(3000)