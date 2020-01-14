const {src, dest, series } = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const minimizeJavascript = () =>
{
    return src('dev/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(dest('public/js'));
}

exports.default = series(minimizeJavascript);