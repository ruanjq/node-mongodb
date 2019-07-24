var morgan = require('morgan');
var fs = require("fs");
var FileStreamRotator = require('file-stream-rotator');
var path = require("path");



let logConfig = app => {


    let logDirectory = path.join(__dirname, '../logs');

    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

    let accessLogStream = FileStreamRotator.getStream({
        date_format: 'YYYYMMDD',
        filename: path.join(logDirectory, '%DATE%-access.log'),
        frequency: 'daily',
        verbose: false
    });

    let dbStream = {
        write(line) {
            console.log(line);
        }
    }

    // 自定义token,获取请求参数
    morgan.token('my_token', (req, res) => {
        return req.query.from || ''
    });


    // 自定义format
    morgan((tokens, req, res) => {
        return [
            tokens['remote-addr'](req, res),
            tokens['method'](req, res),
            tokens['http-version'](req, res),
            tokens['url'](req, res),
            tokens['user-agent'](req, res),
            tokens['referrer'](req, res),
            tokens['remote-user'](req, res),
            tokens['req'](req, res),
            tokens['status'](req, res),
            tokens['res'](req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms',
            tokens['from']
        ].join('****')
    })



    app.use(morgan('', {stream: accessLogStream}));

    // app.use(morgan('combined', { stream: dbStream }));
}


export default logConfig;