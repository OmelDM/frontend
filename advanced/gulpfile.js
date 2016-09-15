"use strict";

var gulp = require('gulp'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer');

var BUILD_DIR = './build/'
	, HTML_PATH = "./sources/*.html"
	, STYLESHEETS_PATHs = ['./sources/**/*.scss', './sources/**/*.css']
	, JS_PATH = './sources/js/*.js'
	, IMG_DIR = './sources/i/*'
	, FONTS_DIR = './sources/fonts/*';

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
	return gulp.src(STYLESHEETS_PATHs)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(concat('style.css'))
		.pipe(gulp.dest(BUILD_DIR))
		.pipe(connect.reload());
});

gulp.task('js', function() {
	return gulp.src(JS_PATH)
		.pipe(gulp.dest(BUILD_DIR + 'js/'))
		.pipe(connect.reload());
});

gulp.task('img', function() {
	return gulp.src(IMG_DIR)
		.pipe(gulp.dest(BUILD_DIR + 'i/'))
		.pipe(connect.reload());
});

gulp.task('fonts', function() {
	return gulp.src(FONTS_DIR)
		.pipe(gulp.dest(BUILD_DIR + 'fonts/'))
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch([HTML_PATH, JS_PATH, STYLESHEETS_PATHs, IMG_DIR], ['html', 'css', 'js', 'img', 'fonts']);
});

gulp.task('default', ['html', 'css', 'js', 'img', 'fonts', 'connect', 'watch']);