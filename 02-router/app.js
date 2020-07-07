const Koa = require('koa')
const KoaRouter = require('koa-router')
const json = require('koa-json')

const app = new Koa()
const router = new KoaRouter()


// make JSON Prettier middleware
app.use(json())


router
    .get('/', ctx => {
        ctx.body = 'Hello World'
    })
    .get('/test', ctx => {
        ctx.body = 'Router Test'
    });

// Router middleware
app.use(router.routes());

app.listen(3000);
console.log("server run at http://localhost:3000")
