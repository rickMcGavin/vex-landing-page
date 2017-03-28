var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	watch('./index.html', function() {
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.scss', function() {
		gulp.start('cssInject');
	});

});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(browserSync.stream());
});

