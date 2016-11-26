var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');


gulp.task('styles', function() {
    return gulp.src('./public/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest('./public/css/'));
});


//Watch task
gulp.task('default',function() {
    gulp.watch('./public/scss/*.scss',['styles']);
});