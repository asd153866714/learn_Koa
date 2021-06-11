const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
    console.log('1')
    await next()
    console.log('11')
})

app.use(async (ctx, next) => {
    let a = new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = 2
            resolve(result)
        }, 2000);
    })
    await a.then(result => console.log(result))
    .catch(err => console.log(err)) 
    next()
    console.log(22)
})

app.use((ctx, next) => {
    console.log('3')
    next()
    console.log('33')
})


app.listen(3000)