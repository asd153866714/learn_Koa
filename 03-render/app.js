const Koa = require('koa')
const KoaRouter = require('koa-router')
const json = require('koa-json')
const path = require('path')
const render = require('koa-ejs')

const app = new Koa()
const router = new KoaRouter()


// make JSON Prettier middleware
app.use(json())

// koa EJS middleware
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
})

router
    .get('/', async ctx => {
        await ctx.render('index', {
            title: 'Things I love'
        })
    })
    .get('/test', ctx => {
        ctx.body = 'Router Test'
    });

// Router middleware
app.use(router.routes());

app.listen(3000);
console.log("server run at http://localhost:3000")
