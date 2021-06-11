const path = require('path')
const views = require('koa-views')
const Koa = require('koa');
const app = module.exports = new Koa()

// setup views, appending .ejs
// when no extname is given to render()

app.use(views(path.join(__dirname, '/views'), { extension: 'ejs'}));

// dummy data

const user = {
    name: {
        first: 'Xing',
        last: 'Chao'
    },
    age: 25
}

// render

app.use(async (ctx) => {
    await ctx.render('user', {user})
})

if (!module.parent) {
    app.listen(3000, () => console.log(`server run at http://localhost:3000`))
}