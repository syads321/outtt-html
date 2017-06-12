var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');


var csorigin = [
    './scss/*.scss'
]
var cssdest = './app/css/';

gulp.task('scss', function() {
    gulp.src(csorigin)
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest(cssdest));
})


gulp.task('watch', function() {
    // gulp.watch('./js/*.js', ['spminify']);
    // gulp.watch('./js/*/*.js', ['spminify']);
    gulp.watch('./scss/*.scss', ['scss']);
    // gulp.watch('./template/*.html', ['html']);
});