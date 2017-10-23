var webpack           = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 环境变量配置，dev / online
var WEBPACK_ENV       = process.env.WEBPACK_ENV || 'dev';
console.log("WEBPACK_ENV");

//获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name, title) {
    return {
        template: './src/view/' + name + '.html',
        filename: 'view/' + name + '.html',
        title   : title,
        inject  : true,
        hash    : true,
        chunks  : ['common', name ]
    };
};
//webpack config
var config = {
    entry: {
        'common': ['./src/page/common/index.js'],
        'index': ['./src/page/index/index.js'],
        'list': ['./src/page/list/index.js'],
        'detail': ['./src/page/detail/index.js'],
        'user-login': ['./src/page/user-login/index.js'],
        'user-register': ['./src/page/user-register/index.js'],
        'user-pass-reset': ['./src/page/user-pass-reset/index.js'],
        'user-center': ['./src/page/user-center/index.js'],
        'user-center-update': ['./src/page/user-center-update/index.js'],
        'user-pass-update': ['./src/page/user-pass-update/index.js'],
        'result': ['./src/page/result/index.js']
    },
    output: {
        path: './dist',
        publicPath : '/dist',
        filename: "js/[name].js"
    },
    /*devServer: {
        historyApiFallback: true,
        noInfo: false,
        inline: true,
        hot: true, //开启热点
        port: '8088', //设置端口号
        proxy: [
            {
                context:['/user','/product','/cart'],
                target: 'http://happymmall.com',
                changeOrigin: true,
                secure: false
            }
        ]
    },*/
    externals: {
      'jquery': "window.jQuery"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader") },
            { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' },
            { test: /\.string$/, loader: 'html-loader' }
        ]
    },
    resolve: {
        alias: {
            util: __dirname + '/src/util',
            page: __dirname + '/src/page',
            service: __dirname + '/src/service',
            image: __dirname + '/src/image',
            node_modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        //独立通用模块到js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        }),
        //把css单独打包到文件
        new ExtractTextPlugin("css/[name].css"),
        //html模板的处理
        // new HtmlWebpackPlugin(getHtmlConfig('index')),
        // new HtmlWebpackPlugin(getHtmlConfig('login'))
        /*模块热替换*/
        //new webpack.HotModuleReplacementPlugin()
    ]
};
    var htmlFilenames = [
                        {name :'index',   title : '首页' },
                        {name :'list',   title : '商品列表页' },
                        {name :'detail',   title : '商品详情页' },
                        {name :'user-login',   title : '用户登录' },
                        {name :'user-register',   title : '用户注册' },
                        {name :'user-pass-reset',   title : '找回密码' },
                        {name :'user-center',   title : '个人中心' },
                        {name :'user-center-update',   title : '修改个人信息' },
                        {name :'user-pass-update',   title : '修改密码' },
                        {name :'result',  title : '操作结果' },
                        ];
        for(file in htmlFilenames){
            config.plugins.push(new HtmlWebpackPlugin(getHtmlConfig(htmlFilenames[file].name, htmlFilenames[file].title)))
    }

    if('dev' === WEBPACK_ENV){
        config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
    }

module.exports =  config;