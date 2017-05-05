/**
 * 
 * TASKS FOR THIS GULP FILE:
 * 
 * bundle/combine JS modules (browserify, look it up in notes)
 * 
 * 
 * 
 * 
 */

let gulp = require('gulp');
let sass = require('gulp-sass');
let browser = require('gulp-browser');
let OUTPUT_DIRECTORY = 'OT-public';

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('OT-public'));
});

gulp.task('css', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('OT-public'));
});

gulp.task('js', function () {
    return gulp.src('js/app.js')
        .pipe(browser.browserify())
        .pipe(gulp.dest('OT-public'));
});

gulp.task('watch', ['html', 'css', 'js'], function (){
    gulp.watch('index.html', ['html']);
    gulp.watch('scss/*.scss', ['css']);
    gulp.watch('js/*.js', ['js']);
});
