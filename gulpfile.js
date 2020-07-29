let gulp = require('gulp');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let minifyCSS = require('gulp-minify-css');
let version= require('./package.json');

//npm install gulp --save --only=dev
gulp.task('hello', () => {
    console.log('Hello ');
});

//npm install gulp-sass

gulp.task('sass', () =>{
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('public/stylesheets'))
});

//npm install gulp-concat

gulp.task('style', () => {
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(concat('style_main.css'))
    .pipe(gulp.dest('public/stylesheets'))
});


//npm install gulp-minify-css

gulp.task('style_min', () => {
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(minifyCSS())
    .pipe(concat('style_main_'+version.version+'.min.css'))
    .pipe(gulp.dest('public/stylesheets'))
});

//gulp watch

gulp.task("watch", () => {
  gulp.watch("scss/**/*.scss", gulp.series("style_min"));
});