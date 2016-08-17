var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');



gulp.task('default', ['build', 'watch']);

gulp.task('build', function() {
    gulp.src('src/*.css')
        .pipe(concatCss('style.css'))
        .pipe(rename('build.css'))
        .pipe(gulp.dest('build/'));
});

gulp.task('watch', function() {
    gulp.watch('src/style.css', function() {
        gulp.run('build');
    })
});
