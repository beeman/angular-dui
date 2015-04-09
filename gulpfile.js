var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// Static server
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      //proxy: "http://localhost:3000/",
      baseDir: "./"
    }
  });

  gulp.watch('*', ['browserSync.reload']);
});
