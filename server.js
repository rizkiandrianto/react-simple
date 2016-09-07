var express = require('express');
var path = require('path');
var config = require('./webpack.config.js');

// Webpack Config
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');


var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('index.html'));
});

// Port
var port = 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express Listenin on Port : ", port);
});