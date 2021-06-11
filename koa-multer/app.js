const Koa = require('koa');
const KoaRouter = require('koa-router');
const fs = require('fs');
const koaBody = require('koa-body');
const path = require('path');
// const multer = require('@koa/multer');

const app = new Koa();
const router = new KoaRouter();
// const upload = multer();

app.use(koaBody({
    multipart: true,
    formidable: {
        // 上传目录
        uploadDir: path.join(__dirname, 'public/upload'),
        // 保留文件扩展名
        keepExtensions: true,
    }
}));

router
    .get('/', async ctx => {
        console.log(__dirname)
        ctx.type = 'html'
        ctx.body = await fs.createReadStream('./index.html')
    })

    .post('/profile', async ctx => {
        // 上传单个文件
        const file = ctx.request.files.avatar; // 获取上传文件
        console.log(file)

        return ctx.body = "上传成功！";
    })


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => console.log("Server run at http://localhost:3000"));