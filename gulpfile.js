var gulp = require('gulp');
var path = require('path');
var uglify = require('gulp-uglify');
var gp_concat = require('gulp-concat');
var sass = require('gulp-sass');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

var jsFiles = [
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/slick-carousel/slick/slick.min.js',
  'scripts/main.js'
];

gulp.task('default', ['js', 'sass', 'watch']);

gulp.task('js', function () {
  gulp.src(jsFiles).pipe(sourcemaps.init())
    .pipe(gp_concat('scripts.min.js'))
    .pipe(sourcemaps.write('../js'))
    .pipe(gulp.dest('develop/js'));
});

gulp.task('sass', function () {
  return gulp.src('styles/front.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./develop/css'));
});

gulp.task('less', function () {
  return gulp.src('less/style.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      compress: true
    }))
    .pipe(gulp.dest('./production/css'));
});

gulp.task('watch', function() {
  gulp.watch('styles/**/*.scss', ['sass']);
  gulp.watch(jsFiles, ['js']);
});

gulp.task('production', function() {
  gulp.src(jsFiles).pipe(gp_concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('production/js'));

  gulp.src('styles/front.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./production/css'));
});
