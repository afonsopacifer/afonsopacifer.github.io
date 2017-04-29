// Modules :)
// ===========================================
const gulp    = require('gulp');
const data    = require('gulp-data');
const pug     = require('gulp-pug');
const banana  = require('gulp-banana');
const babel   = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const connect = require('gulp-connect');

// Compile Jade
// ===========================================
gulp.task('pug', () => {
	gulp.src(['src/**.pug','src/blog/**.pug'])
		  .pipe(data(file => require('./data-base/talks.json')))
		  .pipe(data(file => require('./data-base/projects.json')))
		  .pipe(data(file => require('./data-base/articles.json')))
		  .pipe(data(file => require('./data-base/videos.json')))
      .pipe(data(file => require('./data-base/courses.json')))
    	.pipe(pug())
    	.pipe(gulp.dest('./out/'))
    	.pipe(connect.reload());
});

// banana
// ===========================================
gulp.task('banana', () => {
  gulp.src('src/assets/styles/main.bnn')
    .pipe(banana({
      bnnVariable : false,
      bnnImport : false,
      compress : true
    }))
    .pipe(gulp.dest('./out/assets/styles/'))
    .pipe(connect.reload());
});

// Babel
// ===========================================
gulp.task('babel', () => {
  gulp.src('src/assets/scripts/main.js')
    .pipe(babel({
      presets: ['es2015']
     }))
    .pipe(gulp.dest('./out/assets/scripts/'))
    .pipe(connect.reload());
});

// Imagemin
// ===========================================
gulp.task('imagemin', () => {
  gulp.src(['src/assets/img/*','src/assets/img/**/*'])
    .pipe(imagemin())
    .pipe(gulp.dest('./out/assets/img/'))
    .pipe(connect.reload());
});

// Watch
// ===========================================
gulp.task('watch', () => {
	gulp.watch(['src/**/**.pug','data-base/**.json'], ['pug']);
	gulp.watch(['src/assets/styles/**/**.bnn'], ['banana']);
  gulp.watch(['src/assets/scripts/**.js'], ['babel']);
	gulp.watch(['data-base/*.json'], ['build']);
});

// Static server
// ===========================================
gulp.task('connect', () => {
	connect.server({
		root: './out/',
		livereload: true
	});
});

// More Tasks
// ===========================================
gulp.task('serve', ['connect', 'watch']);
gulp.task('build', ['pug', 'banana', 'babel', 'imagemin']);
