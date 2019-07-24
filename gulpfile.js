const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const watch = require('gulp-watch');
const notify = require('gulp-notify');

const watchPath = {
    js: "./src/**/*.js"
}

gulp.task('bundle', function() {
    return Promise.all([
        new Promise(function(resolve, reject) {
            gulp.src(watchPath.js)
                .pipe(sourcemaps.init())
                .pipe(babel({
                    presets: ['env'],
                    plugins: ['transform-runtime'] // 支持es7
                }))
                .on('error', handleErrors)
                .pipe(uglify())
                .on('error', handleErrors)
                .pipe(sourcemaps.write())
                .pipe(gulp.dest('./dist'))
                .on('end',resolve);
        }),
    ]).then(function() {
    });
});


gulp.task('watch', function() {
    return watch(watchPath.js, (event) => {
        changeLog(event);
        gulp.start("bundle");
    });
});

function changeLog(event) {
    console.log('-------------- file-change ------------')
}

function handleErrors() {
    let args = Array.prototype.slice.call(arguments);

    notify.onError({
        title: 'compile error',
        message: '<%=error.message %>'
    }).apply(this, args); //替换为当前对象

    this.emit(); //提交
}


gulp.task('default', ['watch']);