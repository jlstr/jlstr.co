var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('netflix', () => {
  gulp.src('scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css/'));
});

gulp.task('sampler', () => {
  gulp.src('scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css/'));
});