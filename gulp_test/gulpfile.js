var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');

var htmlMin = require('gulp-htmlmin');

var livereload = require('gulp-livereload');

var connect = require('gulp-connect');
var open = require('open');

// `clean` 函数并未被导出（export），因此被认为是私有任务（private task）。
// 它仍然可以被用在 `series()` 组合中。
{
    function clean(cb){
        console.log(cb());
    }
    // `build` 函数被导出（export）了，因此它是一个公开任务（public task），并且可以被 `gulp` 命令直接调用。
    // 它也仍然可以被用在 `series()` 组合中。
    function build(cb){
        console.log(cb());
    }
    
}
// exports.build = build;
// exports.default = series(clean,build);

// 注册合并压缩js的任务
function js(){
    // **/*.js多层查找js文件
    return gulp.src('src/js/**/*.js')  //找到目标源文件，将数据读取到gulp的内存中  
        .pipe(concat('build.js'))   //临时合并文件
        .pipe(gulp.dest('dist/js/'))    //临时输出文件到本地
        .pipe(uglify()) //压缩文件
        .pipe(rename({suffix:'.min'}))  //重命名
        .pipe(gulp.dest('dist/js/'))
        .pipe(livereload()) //实时刷新
        .pipe(connect.reload())
}
// 注册转换less的任务
function less2css(){
    return gulp.src('src/less/*.less')
        .pipe(less())   //编译less文件为css文件
        .pipe(gulp.dest('src/css/'))
        .pipe(livereload()) //实时刷新
        // .pipe(connect.reload())
}
// 注册合并压缩css文件
function css(){
    return gulp.src('src/css/*.css')
        .pipe(concat('build.css'))
        .pipe(cleanCss({compatibility:'ie8'}))  //可设置兼容ie8
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('dist/css/'))
        .pipe(livereload()) //实时刷新
        // .pipe(connect.reload())
}
// 注册处理html
function html(){
    return gulp.src('index.html')
        .pipe(htmlMin({collapseWhitespace:true}))
        .pipe(gulp.dest('dist/'))
        .pipe(livereload()) //实时刷新
        .pipe(connect.reload())
}
// 半自动
// 注册监视任务
function watches(){
    livereload.listen();    //开启监听
    gulp.watch('src/js/**/*.js',gulp.parallel(js));
    gulp.watch(['src/css/*.css','src/less/*.less'],gulp.parallel(gulp.series(less2css,css)));
}
// 全自动
// 注册监视任务
function server(){
    // 配置服务器的选项
    connect.server({
        root:'dist/',
        livereload:true,
        port:8000
    })
    gulp.watch('src/js/**/*.js',gulp.parallel(js));
    gulp.watch(['src/css/*.css','src/less/*.less'],gulp.parallel(gulp.series(less2css,css)));

    //open可以自动打开指定的连接
    open('http://localhost:8000/');
}

exports.less2css = less2css;
exports.css = css;

exports.server = server;
// exports.default = gulp.series(js,less2css,css); //同步执行
exports.default = gulp.parallel(js,gulp.series(less2css,css),html);   //异步执行

exports.watch = gulp.series(exports.default,watches);
















// // 注册任务
// // gulp.task('任务名'，回调函数)
// gulp.task('test',function(){
//     // 配置任务操作
// })

// // 注册默认任务
// gulp.task('default',[]);
