"use strict";

var gulp = require('gulp'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer');

var BUILD_DIR = './build/'
	, HTML_PATH = "./sources/*.html"
	, STYLESHEETS_PATH = './sources/**/*.scss'
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
	return gulp.src(STYLESHEETS_PATH)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(concat('style.css'))
		.pipe(gulp.dest(BUILD_DIR))
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
	gulp.watch([HTML_PATH, STYLESHEETS_PATH, IMG_DIR], ['html', 'css', 'img', 'fonts']);
});

gulp.task('default', ['html', 'css', 'img', 'fonts', 'connect', 'watch']);