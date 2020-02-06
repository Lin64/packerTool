module.exports = function(grunt) {

    // 初始化配置grunt任务
    grunt.initConfig({
    //   pkg: grunt.file.readJSON('package.json'),
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
        pkg: grunt.file.readJSON('package.json'),   
        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
              '<%= grunt.template.today("yyyy-mm-dd") %> */'
          },
          my_target: {      //自定义的
            files: {
              'build/js/built.min.js': ['build/js/built.js']   //找合并好的文件进行压缩
            }
          }
        },
        jshint: {
            options:{
                jshintrc:'.jshintrc'
            },
           build:['Gruntfile.js','src/js/*.js']
        },
        cssmin: {
            options: {
              mergeIntoShorthands: false,
              roundingPrecision: -1
            },
            target: {
              files: {
                'build/css/build.min.css': ['src/css/*.css']
              }
            }
        },
        watch: {
            scripts: {
              files: ['src/js/*.js','src/css/*.css'],
              tasks: ['concat','uglify','jshint','cssmin'],
              options: {
                spawn: false,   //变量更新  true表示全量更新，css\js分别针对更新，不会改了css连js工作都做了
              },
            },
        },
    });
  
    // 加载包含 "uglify" 任务的插件。
    // grunt任务执行的时候去加载对应插件
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // 默认被执行的任务列表。   任务执行是同步的
    // 注册grunt的默认任务
    // grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', ['concat','uglify','jshint','cssmin']);
    grunt.registerTask('myWatch',['default','watch']);
  
  };