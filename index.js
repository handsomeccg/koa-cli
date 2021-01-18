const Koa = require('koa')
const app = new Koa()
const path = require('path')
const routing = require('./routes')
//跨域处理
const cors = require('koa2-cors');
const koaBody = require('koa-body')
const parameter = require('koa-parameter')


/*app.use(async ctx => {
    ctx.body = 'Hello World'
})*/
/*app.use(
    cors({
        origin: function() { //设置允许来自指定域名请求
            return '*'; // 允许来自所有域名请求
        },
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'DELETE'], //设置允许的HTTP请求类型
        allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'appid','areaid','secret','token','X-Access-Token']
    })
);*/
app.use(koaBody({
    multipart: true,
    formidable: {
        // 上传文件目录
        uploadDir: path.join(__dirname, '/public/uploads'),
        // 保留扩展名
        keepExtensions: true
    }
}))
//app.use(parameter(app))
routing(app)

app.listen(3000, () => { console.log('程序已运行在3000端口')})