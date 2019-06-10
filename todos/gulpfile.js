const gulp = require('gulp');
// const cache = require('gulp-cached');
const sass = require('gulp-sass');
//gulp-plumberの読み込み
const plumber = require('gulp-plumber');

gulp.task('sass', function () {
    return gulp.src('scss/style.scss')
        .pipe(plumber())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('scss/style.scss', gulp.task('sass'));
});

gulp.task('default', gulp.task('watch'));

