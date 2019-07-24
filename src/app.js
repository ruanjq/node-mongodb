var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var ejs = require('ejs');
var fs = require("fs");
var router = express.Router();

import db from "./db.config";

import routerConfig from './routes/router.config';
// import logConfig from './log.config';
import toolsFun from './tools.fun';

import config from "./config/config.dev";

app.locals.DOMAIN = config.DOMAIN;
app.locals.user = null;
app.locals.toolsFun = toolsFun;

//设置模板目录
app.set('views', path.join(__dirname, '../static/views'));

// 设置引擎后缀.  index.html 中的内容可以是 ejs 代码
ejs.delimiter = "?";

app.engine('html', ejs.renderFile);

// 设置模板引擎
app.set('view engine', 'html');
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, '../', 'favicon.ico')));

app.set('showStackError', true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
// 设置响应类型为 json 数据格式
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));
app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)
// 静态资源目录
app.use(express.static(path.join(__dirname, '../static')));

// console.log("----------",process.env.NODE_ENV);


app.use(session({
    name: "USER_ID",
    secret: 'windhome_1', // 用来对session id相关的cookie进行签名
    store: db.mongoStore, // 本地存储session（文本文件，也可以选择其他store，比如redis的）
    saveUninitialized: false, // 是否自动保存未初始化的会话，建议false
    resave: false, // 是否每次都重新保存会话，建议false
    cookie: {
        maxAge: 30 * 1000 * 60 // 有效期，单位是毫秒 30 分钟
    }
}));



// logConfig(app);

// 配置路由必须放在 配置session 后面，才能在router req 对象中使用session,好像酱紫的
routerConfig(router,app);




console.log(config.DOMAIN);



app.listen(config.PORT, config.DOMAIN, () => {
    console.log('Listening at http://' + config.DOMAIN + ':' + config.PORT + ' \n')
});


function logErrors(err, req, res, next) {

    console.error(err.stack)
    next(err)
}



function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' })
    } else {
        next(err)
    }
}

function errorHandler(err, req, res, next) {
    res.status(500)
    res.render('error', { error: err })
}