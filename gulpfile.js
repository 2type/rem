var gulp = require('gulp')
var less = require('gulp-less')

var LessPluginFunctions = require('less-plugin-functions')
gulp.task('less', function () {
    gulp.src('less/**.less')
        .pipe(less({
            plugins: [
                new LessPluginFunctions()
            ]
        }))
        .pipe(gulp.dest('dist/'))
});

gulp.task('auto', function () {
    gulp.watch('less/**.less', ['less'])
})

gulp.task('default', ['less', 'auto'])
