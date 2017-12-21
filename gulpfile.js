'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename"); 
var runSequence = require('run-sequence').use(gulp);
var imagemin = require("gulp-imagemin");
var del = require("del");


gulp.task('style', function() {
  return gulp.src('app/scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          flexbox: "no-2009",
          grid: true,
          cascade: false
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename(function(path) {
          path.basename += ".min"
        }))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task("delete", function() {
  return del("build");
});

gulp.task('build', ['delete'], function() {
  gulp.src('app/css/**').pipe(gulp.dest("build/css"));  
  gulp.src('app/js/**').pipe(gulp.dest("build/js"));
  gulp.src('app/fonts/**').pipe(gulp.dest("build/fonts"));
  gulp.src('app/**/*.html').pipe(gulp.dest("build"));
  gulp.src("app/img/**/*.{png,jpg,gif}")
    .pipe(imagemin([
       imagemin.optipng({optimizationLevel: 3}),
       imagemin.jpegtran({progressive: true})
     ]))
     .pipe(gulp.dest("build/img"));
});

gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', ['style']);
  gulp.watch('app/**/*.html', browserSync.reload);
})

gulp.task('default', function() {
  runSequence('style', 'browser-sync', 'watch');
})





