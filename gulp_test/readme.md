1、gulp介绍
    中文主页：http://www.gulpjs.com.cn/
    基于nodejs的自当任务运行器
    能自动化完成js/coffee/sass/less/html/image/css等文件的合并、压缩、检查、监听文件变化、浏览器自动刷新、测试等任务
    更高效（异步多任务）
2、安装nodejs
3、创建目录
    /- dist
    /- src
        /- js
        /- css
        /- less
    /- index.html
    /-gulpfile.js   gulp配置文件
    /-package.json
4、安装gulp
    全局安装gulp
    局部安装gulp
5、使用gulp插件
    相关插件
        gulp-concat
        gulp-uglify
        gulp-rename     文件重命名
        gulp-less       编译less
        gulp-clean-css  压缩css
        gulp-livereload 实时自动编译刷新
    重要API
        gulp.src(filePath/pathArr)

        gulp.dest(dirPath/pathArr)

        gulp.series()
        gulp.parallel()

        gulp.watch()
    处理js
        创建js文件
            src/js/test1.js
        下载插件
            gulp-concat
            gulp-uglify
            gulp-rename 
    处理css
        创建less/css文件
            src/css/test1.css
            ...
        下载插件
            gulp-less       
            gulp-clean-css
    处理html
        下载插件
            gulp-htmlmin
    自动编译
        下载插件
            gulp-livereload
    热加载
        下载插件
            gulp-connect
            open
    拓展
        下载插件
            gulp-load-plugins
        包含着所有gulp的插件
            var $ = require('gulp-load-plugins')();
            $.less()
            $.cleanCss()
            $.htmlmin()
