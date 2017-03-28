var gulp = require('gulp'),
sass = require('gulp-sass');

gulp.task('styles', function() {
	gulp.src('./app/assets/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./app/assets/styles'))
});

// gulp.task('watch', function() {
// 	gulp.watch('./app/assets/styles/**/*.scss', ['styles']);
// });