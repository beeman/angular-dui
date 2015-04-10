var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var watchDirs = [
  '*',
  'js/*.js',
  'templates/*.html',
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
