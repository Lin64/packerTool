1、什么是webpack
    模块打包器
    打包前端所有资源文件

    理解Loader
        webpack本身只能加载JS/JSON模块，如果要加载其他类型的文件（模块），就需要使用相应的loader进行转换/加载
        Loader本身也运行在node.js环境中的js模块
        本身是一个函数，接受源文件作为参会，返回转换的结果
        loader一般以XXX-loader的方式命名，xxx代表了这个loader要做的转换功能，比如json-loader
    配置文件（默认）
        webpack.config.js:一个node模块，返回一个json格式的配置信息对象
2、插件
    完成一些loader不能完成的功能
    插件的使用一般是在webpack的配置信息plugins选项中指定
    CleanWebpackPlugin：自动清楚指定文件夹资源
    HtmlWebpackPlugin：自动生成Html文件
    UglifyJSplugin：压缩js文件
3、学习文档

    安装webpack
        全局、本地分别安装
4、编译打包应用
    创建入口src/js：entry.js
    document.write("entry.js is work")
    创建主页面：dist/index.html
    <script src="bundle.js"></script>
    编译js
    **webpack src/js/entry.js dist/bundle.js
5、添加js/json文件
    src/js/math.js
        export function square(x){
            x*x
        }
7、打包css文件
    安装样式的loader
        npm install css-loader style-loader --save-dev
        npm install file-loader url-loader --save-dev
8、处理图片文件
    url-loader
        大图无法打包到entry.js中，index.html不在生成的资源目录下
        页面加载图片会在所在的目录位置查找，导致页面加载图片时大图路径不对
        解决方法：
            1、使用publicPath:'/js/'   //为index.html提供资源的加载路几个
            2、将index.html放在dist/js也可以解决
9、自动编译打包
    利用webpack开发服务器工具：webpack-dev-server
    下载
        npm install XXX
    webpack配置
        devServer:{
            contentBase:'./dist'
        },
    package.json配置
        "start":"webpack-dev-server --open"
10、使用webpack插件
    常用插件
        html-webpack-plugin 
        clean-webpack-plugin
    下载

    webpack配置
     plugins:[
        new HtmlWebpackPlugin({template:'./index.html'}),
        new CleanWebpackPlugin(['dist']),
    ]