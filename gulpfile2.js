
//今天是7.6号，，，下午我在教务学习高级程序下《AngularJs》专业高级最后一个月。。。学习过程中
//遇到了很多问题，
//，多亏了我们讲师不厌其烦的讲解，最后明白了一些，
//接下来自己要多多浏览这方面的页面，加强自己的专业知识

var gulp = require('gulp');
var connect = require('gulp-connect');
//创建连接服务器；
gulp.tack('connect',function(){
	connect.server({
		root:'www',
		livereload:true
	});
});

//创建监听页面路径及自动刷新
gulp.task('html',function(){
	gulp.src('./www/index.html')
		.pipe(connect.reload());
});
//创建监听服务；
gulp.task('watch',function(){
	//监听路径及监听文件格式
	gulp.watch(['./www/*.html'],['html']);
});

//监听默认进程，执行多个服务；
gulp.task('default',['connect','watch']);