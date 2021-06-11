const Koa = require('koa');
const koaBody = require('koa-body');
const session = require('koa-session');
const CSRF = require('koa-csrf');
const router = require('koa-router')();
const path = require('path');
const views = require('koa-views');

const app = module.exports = new Koa();

app.use(views(path.join(__dirname, 'views'), {extension: 'ejs'}));

// csrf need session

app.keys = ['session key', 'csrf example']
app.use(session(app))
app.use(koaBody())

// maybe a bodyparser

// csrf middleware

app.use(new CSRF())

// route

router
    .get('/token', token)
    .get('/register', register)
    .post('/register', post)

app.use(router.routes())

async function token(ctx) {
    ctx.body = ctx.csrf;
}

async function register(ctx) {
    await ctx.render('register',{
        csrf: ctx.csrf
    })
}

async function post(ctx) {
    ctx.body = {ok: true}
}

if (!module.parent) {
    app.listen(3000, () => console.log(`server run at http://localhost:3000`))
}