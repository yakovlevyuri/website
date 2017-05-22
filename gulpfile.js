var gulp = require('gulp');
var path = require('path');
var uglify = require('gulp-uglify');
var gp_concat = require('gulp-concat');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

var jsFiles = [
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/highlightjs/highlight.pack.js',
  'node_modules/perfect-scrollbar/dist/js/perfect-scrollbar.jquery.min.js',
  'node_modules/instafeed.js/instafeed.min.js',
  'src/scripts.js'
];

gulp.task('default', ['js', 'less', 'watch']);
gulp.task('build', ['js', 'less']);

gulp.task('js', function () {
  gulp.src(jsFiles).pipe(sourcemaps.init())
    .pipe(gp_concat('scripts.min.js'))
    .pipe(sourcemaps.write('../js'))
    .pipe(gulp.dest('public/static/js'));
});

gulp.task('less', function () {
  return gulp.src('src/assets/styles/front.less')
    .pipe(sourcemaps.init())
    .pipe(gp_concat('front.min.css'))
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      compress: true
    }))
    .pipe(gulp.dest('public/static/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/assets/styles/**/*.less', ['less']);
  gulp.watch(jsFiles, ['js']);
});
