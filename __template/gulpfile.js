"use strict";

var gulp = require('gulp'),
	connect = require('gulp-connect');

var BUILD_DIR = './build/'
	, HTML_PATH = "./sources/*.html"
	, CSS_PATH = './sources/*.css'
	, IMG_DIR = './sources/i/*';

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

gulp.task('img', function() {
	return gulp.src(IMG_DIR)
		.pipe(gulp.dest(BUILD_DIR + 'i/'))
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch([HTML_PATH, CSS_PATH, IMG_DIR], ['html', 'css', 'img']);
});

gulp.task('default', ['html', 'css', 'img', 'connect', 'watch']);