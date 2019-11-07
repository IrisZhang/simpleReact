const Webpack = require('webpack');
const path = require('path');
const WebpackDevServer = require('./node_modules/webpack-dev-server/lib/Server');
const webpackConfig = require('./webpack.config');

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
    open: true, // 可指定浏览器 'Google Chrome'
    // openPage: [], // 可指定open的文件
    clientLogLevel: 'silent',
    // 指定多个库
    // contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'assets')],
    // lazy: true, // 特定文件filename，被请求时编译， lazy未false，filename无效
    // filename: 'bundle.js',
    // historyApiFallback: {
    //     rewrites: [
    //         { from : /^\/$/, to: '/vies/landing.html' },
    //         { from: /./, to: '/views/404.html' }
    //     ]
    // }, // 指定404等行为页面
    // host: '0.0.0.0',
    // hot: true, // 建议使用webpack.HotModuleReplacementPlugin代替
    // hotOnly: true, // 只在build成功后刷新页面
    // http2: true,
    // https: {
    //   key: fs.readFileSync('/path/to/server.key'),
    //   cert: fs.readFileSync('/path/to/server.crt'),
    //   ca: fs.readFileSync('/path/to/ca.pem'),
    // },
    // liveReload: true, // 动态载入
    // overlay: true, // 只显示编译错误
    // overlay: {
    //     warnings: true,
    //     errors: true
    // },
    // publicPath: '/assets/', // 默认/
    stats: {
        colors: true,
    },
    proxy: {
        '/some': {
            target: 'http://localhost:3000',
            bypass: function(req, res, proxyOptions) {
                console.log('some rquest')
                return false;
            }
        }
    }
});

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(8080, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:8080')
})