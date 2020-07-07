const Koa = require('koa')
const KoaRouter = require('koa-router')
const json = require('koa-json')
const path = require('path')
const render = require('koa-ejs')
const body = require('koa-body')

const app = new Koa()
const router = new KoaRouter()

// Replace with DB
const things = ['Apple', 'Banana', 'Orange']

// add additional properties for contex(ctx)
app.context.user = 'Xing'

// make JSON Prettier middleware
app.use(json())
// Bodyparser middleware
app.use(body())

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
            title: 'Things I love',
            things: things
        })
    })
    .get('/add', async ctx => {
        await ctx.render('add')
    })
    .post('/add', ctx => {
        let body = ctx.request.body
        things.push(body.thing)
        ctx.redirect('/')
    })
    .get('/test', ctx => ctx.body = `Hellp ${ctx.user}`)
    .get('/test:name', ctx => ctx.body = `Hello ${ctx.params.name}`)
    ;

// Router middleware
app.use(router.routes());

app.listen(3000);
console.log("server run at http://localhost:3000")
