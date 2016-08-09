"use strict";

var gulp = require('gulp'),
	connect = require('gulp-connect');

var BUILD_DIR = './build/'
	, HTML_PATH = "./sources/*.html"
	, CSS_PATH = './sources/*.css';

gulp.task('connect', function() {
	connect.server({
		root: BUILD_DIR,
		livereload: true
	});
});

gulp.task('html', function() {
	return gulp.src(HTML_PATH)
		.pipe(gulp.dest(BUILD_DIR))
		.pipe(connect.reload());
});

gulp.task('css', function() {
	return gulp.src(CSS_PATH)
		.pipe(gulp.dest(BUILD_DIR))
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch([HTML_PATH, CSS_PATH], ['html', 'css']);
});

gulp.task('default', ['html', 'css', 'connect', 'watch']);