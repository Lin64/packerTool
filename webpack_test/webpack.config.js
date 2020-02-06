const path = require('path');   //node内置模块，用来设置路径

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:'./src/js/entry.js',  //入口文件的配置
    output:{                    //输出的配置
        filename:'bundle.js',   //输出的文件名
        // publicPath:'js/',       //设置为index.html提供资源的时候带有强制性
        path:path.resolve(__dirname,'dist/js/')
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                    limit:8192
                }
              }
            ]
          }
        ],
    },
    devServer:{     //配置webpack-dev-server
        contentBase:'./dist'    // webpack-dev-server默认服务于根路径下index.html
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./index.html'}),
        new CleanWebpackPlugin(['dist']),
    ]
}