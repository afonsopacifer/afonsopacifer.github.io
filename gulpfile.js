// Modules :)
// ===========================================
const gulp   = require('gulp');
const data   = require('gulp-data');
const pug    = require('gulp-pug');
const banana = require('gulp-banana');
const babel  = require('gulp-babel');
const connect = require('gulp-connect');

// Compile Jade
// ===========================================
gulp.task('pug', () => {
	gulp.src(['src/**.pug'])
		  .pipe(data(file => require('./data-base/talks.json')))
		  .pipe(data(file => require('./data-base/projects.json')))
		  .pipe(data(file => require('./data-base/articles.json')))
    	.pipe(pug())
    	.pipe(gulp.dest('./'))
    	.pipe(connect.reload());
});

// banana
// ===========================================
gulp.task('banana', () => {
  gulp.src('src/styles/main.bnn')
    .pipe(banana({
      bnnVariable : false,
      bnnImport : false,
      compress : true
    }))
    .pipe(gulp.dest('assets/styles/'))
    .pipe(connect.reload());
});

// Babel
// ===========================================
gulp.task('babel', () => {
  gulp.src('src/scripts/main.js')
    .pipe(babel({
      presets: ['es2015']
     }))
    .pipe(gulp.dest('assets/scripts/'))
    .pipe(connect.reload());
});

// Watch
// ===========================================
gulp.task('watch', () => {
	gulp.watch(['src/**/**.pug'], ['pug']);
	gulp.watch(['src/styles/**/**.bnn'], ['banana']);
  gulp.watch(['src/scripts/**.js'], ['babel']);
});

// Static server
// ===========================================
gulp.task('connect', () => {
	connect.server({
		root: './',
		livereload: true
	});
});

// More Tasks
// ===========================================
gulp.task('serve', ['connect', 'watch']);
gulp.task('build', ['pug', 'banana', 'babel']);
