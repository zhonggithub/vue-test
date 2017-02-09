/**
* @Author: Zz
* @Date:   2016-09-09 10:09:20
* @Email:  quitjie@gmail.com
* @Project: hms-group-web
* @Last modified by:   Zz
* @Last modified time: 2016-10-09T20:23:25+08:00
*/
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const webpackConfig = require('./webpack.config');

const app = express();

const compiler = webpack(webpackConfig);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(webpackDevMiddleware(compiler, {
  publicPath : webpackConfig.output.publicPath,
  status: {
    colors: true
  }
}));
app.use(require('webpack-hot-middleware')(compiler));

function mockLoginSuccess(res, body){
  const data = {
    code: 0,
    message: 'success',
    data: {
      account: 'zz0',
      password: '',
      trueName: 'zz0',
      roles: [],
      lastLoginTime: 1473386516,
      id: '57de55213e442a17287ecd67',
      createAt: 1473326516,
      updateAt: 1473326516,
      tid: '12564'
    },
    token: 'token',
    payload: {
      iat: Date.now(),
      u: body.account,
      t: 'hms0111',
      r: ['开发者测试号'],
    }
  };

  res.session = {
    t: '0000',
  }

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(data));
  res.end();
}

app.post('/group/api/login', (req, res, next) => {
  let body = req.body;
  // (1) 先获取 用户名及密码 的密文，解密
  mockLoginSuccess(res, {account: 'group'});
});

app.post('/group/api/login/group', (req, res, next) => {
  let body = req.body;
  mockLoginSuccess(res, body);
});



app.use('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(`${compiler.outputPath}index.html`,
  (err, rst) => {
    if(err){
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.end(rst);
  });
});

app.listen(3000, () => {
  console.log('listen 3000');
});
