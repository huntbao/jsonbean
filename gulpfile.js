/**
 * @author huntbao
 */
'use strict'

var gulp = require('gulp')
var mocha = require('gulp-mocha')

gulp.task('mocha', function () {
    return gulp.src('__tests__/run_tests.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
})

gulp.task('build', ['mocha'])

gulp.start('build')