/**
* @Author: Zz
* @Date:   2016-09-10T10:35:08+08:00
* @Email:  quitjie@gmail.com
* @Last modified by:   Zz
* @Last modified time: 2016-09-11T22:46:25+08:00
*/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = '/vueTest/public';
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

const entry = [
  //'babel-polyfill',
  `${__dirname}/src/index.js`
];

const loaders = [
  { test: /\.jsx$/, loader: 'babel-loader?cacheDirectory', include: `${__dirname}/src` },
  { test: /\.(less|css|scss)$/, loader: 'style-loader!css-loader!less-loader'},
  { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
  { test: /\.json$/, loader: "json-loader" },
  { test: /\.vue$/, loader: 'vue-loader' },
  { test: /\.html$/, loader: 'html-loader' }
];

const plugins = [
  new HtmlWebpackPlugin( { template: 'src/index.html' } ),
  new webpack.LoaderOptionsPlugin({
    options: {
      babel: {
        compact: true,
        presets: ['es2015'],
      },
      vue: {
        loaders: {
          js: 'babel-loader',
        },
      },
      sassLoader: {
        includePaths: [path.resolve(__dirname, 'src', 'scss')]
      },
      context: '/'
    }
  }),
];
if (process.env.NODE_ENV === 'development') {
  entry.unshift(hotMiddlewareScript);
  plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new webpack.NoEmitOnErrorsPlugin());
  loaders.push({ test: /\.(png|jpg|gif|jpe?g)$/, loader: 'file-loader'});
  loaders.push({ test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader" });
} else if(process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  plugins.push(new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }
  }));
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false,  // remove all comments
    },
    compress: {
      warnings: false
    }
  }));
  loaders.push({ test: /\.(png|jpg|gif|jpe?g)$/, loader: 'file-loader?limit=8192&name=/images/[hash].[ext]'});
  loaders.push({ test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader?name=/fonts/[hash].[ext]" });
}

module.exports = {
  entry,
  resolve : {
    extensions:['.js', '.less', '.json', '.css', '.jsx', '.vue'],
    root: [
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './src/components')
    ],
    alias: {
    }
  },
  //文件导出的配置
  output:{
    path : `${__dirname}/dist/`,
    filename: '[hash].bundle.js',
    chunkFilename: '[hash].bundle.js',
    publicPath
  },
  module: {
    loaders,
  },
  externals: {
  },
  plugins,
}
