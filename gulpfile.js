var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('prefix', function () {
	return gulp.src('_site/css/style.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('_site/css'));
});
