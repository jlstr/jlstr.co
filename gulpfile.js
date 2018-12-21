var gulp = require('gulp');
var sass = require('gulp-sass');

// gulp.task('sass', () => {
//   gulp.src('scss/**/*.scss')
//       .pipe(sass().on('error', sass.logError))
//       .pipe(gulp.dest('./css/'));
// });


// Gulp 4 Syntax

const style = () => {
  return (
    gulp.src('scss/**/*.scss')
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(gulp.dest('./css/'))
  );
}

exports.style = style;
