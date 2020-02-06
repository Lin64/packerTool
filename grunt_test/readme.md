
1、安装Nodejs

2、创建一个简单的应用grunt_test
    /- build-----------构建生成的文件所在的文件夹
    /- src-------------源码文件夹
        /- js----------js源文件夹
        /- css---------css源文件夹
    /- index.html------页面文件
    /- Gruntfile.js----grunt配置文件按（注意首字母大写）
    /-package.json-----项目包配置问价
        {
            "name":"grunt_test",
            "version:"1.0.0"
        }
3、全局安装grunt-cli
    npm install grunt-cli -g
4、安装grunt
    npm install grunt --save-dev
5、运行构建命令
    grunt   //提示 warning:Task "default" not found
6、配置文件：Gruntfile.js
    此配置文件本质就是一个node函数类型模块
    配置编码包含3步：
        初始化插件配置
        加载插件任务
        注册构建任务
    基本编码
        module.exports = function(grunt) {

            // 初始化配置grunt任务
            grunt.initConfig({
                //主要编码处
            });
        
            // 加载包含 "uglify" 任务的插件。
            // grunt任务执行的时候去加载对应插件
            // grunt.loadNpmTasks('grunt-contrib-uglify');
        
            // 默认被执行的任务列表。
            // 注册grunt的默认任务
            // grunt.registerTask('default', ['uglify']);
        };
    命令：grunt  //显示Done,表示成功
7、Grunt插件介绍
    插件分类
        grunt团队贡献的插件：插件名大都以contrib-开头
        第三方提供的插件：大都不以contrib-开头
    常用的插件
        grunt-contrib-clean     清除文件（打包处理生成的）
        grunt-contrib-concat    合并多个文件的代码到一个文件中
        grunt-contrib-uglify    压缩js文件
        grunt-contrib-jshint    JavaScript语法错误检查
        grunt-contrib-cssmin    压缩/合并css文件
        grunt-contrib-htmlmin   压缩html文件
        grunt-contrib-imagemin  压缩图片文件（无损）
        grunt-contrib-copy      复制文件、文件夹
        grunt-contrib--watch    实时监控文件变化、调用相应的任务重新执行
8、合并js
    下载
        npm install grunt-contrib-concat --save-dev
    配置Gruntfile.js
        npm查找插件的配置代码
            concat: {
                options: {
                    // 连接两个js文件代码的分隔符
                    separator: ';',
                },
                dist: {
                    src: ['src/js/*.js'],   //源文件
                    dest: 'build/js/built.js', //打包后的文件
                },
            },

                grunt.loadNpmTasks('grunt-contrib-concat');

    编码
        对相应的js文件进行编码
    命令：grunt concat
9、压缩js 使用uglify插件按
10、js语法检查 使用Jshint插件
    npm XXX
    编码.jshintrc：
        {
            "curly": true,
             "eqnull": true,
             "eqeqeq": true,
            // 不能使用未定义的变量
            "undef": true,
            // 语句后面必须有分号
            "asi":false,
            // 预定义不检查的全局变量
            "predef":["default","BMap","angular","BMAP_STATUS_SUCCESS"],
            "globals": {
                "jQuery": true
            }
        }
    配置Gruntfile
11、使用cssmin插件
12、使用watch插件


