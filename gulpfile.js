var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var angularTemplates = require('gulp-angular-templates');
var del = require('del');
var concat = require('gulp-concat');

var watchDirs = [
  '*',
  'src/js/*.js',
  'src/templates/*.html',
  'examples/**/*.*'
];

var bsOptions = {
  server: {
    baseDir: "./"
  },
  logConnections: true
};

gulp.task('serve', function () {
  browserSync(bsOptions);

  gulp.watch(watchDirs, {cwd: './'}, reload);
});

gulp.task('angular', function () {
  return gulp.src('src/templates/**/*.html')
    .pipe(angularTemplates({module: 'angularDui', basePath: '/templates/'}))
    .pipe(gulp.dest('./build/'));
});

// Scripts
gulp.task('scripts', function () {
  return gulp.src(['src/js/**/*.js', 'build/*.html.js'])
//    .pipe(jshint('.jshintrc'))
//    .pipe(jshint.reporter('default'))
    .pipe(concat('angular-dui.js'))
    //.pipe(gulp.dest('dist'))
    //.pipe(rename({suffix: '.min'}))
    //.pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Clean
gulp.task('clean', function (cb) {
  del(['dist/', 'build/'], cb);
});

// Default task
gulp.task('default', ['clean', 'angular'], function () {
  gulp.start('scripts');
});


